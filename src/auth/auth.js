import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router";

const ax = axios.create({
   baseURL: 'http://localhost:8000',
})

const appAuthProvider = {
   accessToken: null,
   refreshToken: null,
   isAuthenticated: false,
   async signin(userdata, callback) {
      appAuthProvider.isAuthenticated = true;
      try {
         var result = await ax.post('/auth/login/', {
            username: userdata.username,
            password: userdata.password,
         })
         if (result.status === 200 && result.data) {
            appAuthProvider.accessToken = result.data.access;
            appAuthProvider.refreshToken = result.data.refresh;
            let user_detail = await ax.get('/userdetail')
            localStorage.setItem("user_email", JSON.stringify(user_detail.email))
            localStorage.setItem("user_first_name", user_detail.data.first_name)
            localStorage.setItem("user_last_name", user_detail.data.last_name)
            localStorage.setItem("user_is_staff", JSON.stringify(user_detail.data.is_staff))
            callback(user_detail.data)
         }
      } catch (error) {
         if (error.response) {
            if (userdata.username === "" || userdata.password === "") {
               console.log('There must be no blank field.')
               callback("some field is blank.")
            }
            if (error.response.data.detail) {
               console.log('No active account found with the given credentials.')
               callback("valid username or password.")
            }
         }
      }
   },


   signout(callback) {
      appAuthProvider.isAuthenticated = false;
      setTimeout(callback, 100);
   },
};

ax.interceptors.request.use(config => {
   if (appAuthProvider.accessToken) {
      config.headers.authorization = `Bearer ${appAuthProvider.accessToken}`
   }
   return config;
})

let AuthContext = React.createContext(null);


function AuthProvider({ children }) {
   let [user, setUser] = React.useState(null);
   let navigate = useNavigate()
   let auth = useAuth()


   let signin = (userdata, callback) => {
      return appAuthProvider.signin(userdata, (response) => {
         setUser(response);
         localStorage.setItem('access_token', appAuthProvider.accessToken);
         callback(response);
      });
   };

   let signout = () => {
      return appAuthProvider.signout(() => {
         setUser(null);
         localStorage.clear()
         navigate('/login', { replace: true })
      });
   };

   let value = { user, setUser, signin, signout };

   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
   return React.useContext(AuthContext);
}

function RequireAuth({ children }) {
   let auth = useAuth();
   let location = useLocation();

   if ((auth.user).stringify === undefined) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/login" state={{ from: location }} replace />;
   }

   return children;
}

function AuthGuard({ children }) {
   let auth = useAuth()
   let navigate = useNavigate()
   let location = useLocation()

   useEffect(() => {

      if (!auth.user) {
         try {
            let token = (localStorage.getItem('access_token'))
            auth.signin(token);
            return children
            // return children
         }
         // If server can't find Access Token --> Back to login page
         catch (error) {
            return <Navigate to="/login" state={{ from: location }} replace />, children
         }

      }
   })

   return children

}

export { appAuthProvider, AuthContext, AuthProvider, useAuth, RequireAuth, ax, AuthGuard };