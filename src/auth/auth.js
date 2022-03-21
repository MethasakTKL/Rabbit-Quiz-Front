import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

const ax = axios.create({
   baseURL: 'http://localhost:8000',
})

const appAuthProvider = {
   accessToken: null,
   refreshToken: null,
   isAuthenticated: false,
   async signin(auth_token, callback) {
      appAuthProvider.isAuthenticated = true;
      appAuthProvider.accessToken = auth_token.access;
      appAuthProvider.refreshToken = auth_token.refresh;
      callback()
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
}
)



let AuthContext = React.createContext(null);

function AuthProvider({ children }) {
   let [user, setUser] = React.useState([null]);

   let signin = (newUser, callback) => {
      return appAuthProvider.signin(newUser, () => {
         setUser(newUser);
         callback();
      });
   };

   let signout = (callback) => {
      return appAuthProvider.signout(() => {
         setUser(null);
         callback();
      });
   };

   let value = { user, signin, signout };

   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
   return React.useContext(AuthContext);
}

function RequireAuth({ children }) {
   let auth = useAuth();
   let location = useLocation();


   if (!auth) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Link to="/login" state={{ from: location }} replace />;
   }

   return children;
}

function AuthGuard({ children }) {
   let auth = useAuth()
   let navigate = useHistory()
   useEffect(() => {
      if (!auth) {
         navigate.push('/login', { replace: true })
      }
   })

   return children
}

export { appAuthProvider, AuthContext, AuthProvider, useAuth, RequireAuth, ax, AuthGuard };