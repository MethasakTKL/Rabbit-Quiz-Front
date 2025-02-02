import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Navigate, Outlet } from "react-router";
import config from "./config";

const ax = axios.create({
   baseURL: config.UrlPrefix,
   withCredentials: true,
})


const appAuthProvider = {
   accessToken: null,
   refreshToken: null,
   isAuthenticated: false,
   async signin(userdata, callback) {
      try {

         var username = localStorage.getItem("id_username");
         var password = localStorage.getItem("id_password");

         if (username != null || password != null) {
            userdata = {
               username: username,
               password: password,
            };

         }

         var result = await ax.post('auth/login/', {
            username: userdata.username,
            password: userdata.password,
         })

         if (result.status === 200 && result.data) {
            console.log("Login Success...")
            appAuthProvider.isAuthenticated = true;
            appAuthProvider.accessToken = result.data.access;
            appAuthProvider.refreshToken = result.data.refresh;
            (ax.interceptors.request.use(config => {
               if (appAuthProvider.accessToken) {
                  config.headers.authorization = `Bearer ${appAuthProvider.accessToken}`
               }
               return config;
            }))
            let user_detail = await ax.get('userdetail')
            localStorage.setItem("student_id", user_detail.data.id)
            localStorage.setItem("user_first_name", user_detail.data.first_name)
            localStorage.setItem("user_last_name", user_detail.data.last_name)
            localStorage.setItem("user_email", user_detail.data.email)
            localStorage.setItem("user_is_staff", JSON.stringify(user_detail.data.is_staff))
            localStorage.setItem("id_username", userdata.username)
            localStorage.setItem("id_password", userdata.password)
            callback(user_detail.data)
         }

      }
      catch (error) {
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
      localStorage.clear()
      setTimeout(callback, 100);
   },
};

let AuthContext = React.createContext(null);


function AuthProvider({ children }) {
   let [user, setUser] = React.useState(JSON.parse(localStorage.getItem('response')));
   let navigate = useNavigate();
   let auth = useAuth();
   let location = useLocation();


   let signin = (userdata, callback) => {
      return appAuthProvider.signin(userdata, (response) => {
         setUser(response);
         callback(response);
         localStorage.setItem('access_token', appAuthProvider.accessToken);
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

export { appAuthProvider, AuthContext, AuthProvider, useAuth, ax };