import React, { useEffect } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const appAuthProvider = {
    isAuthenticated: false,
    accessToken: null,
    refreshToken: null,
    async signin(token, callback) {
        appAuthProvider.isAuthenticated = true;
        let result = await axios.post('http://localhost:8000/api/token/', {
            token
        })
        if(result.status == 200 && result.data){
            appAuthProvider.accessToken = result.data.access
            appAuthProvider.refreshToken = result.data.refresh
            let user_result = await axios.get('http://localhost:8000/api/whoami/')
            callback(user_result.data)
        }else{
            callback(null)
        }
    },
    signout(callback) {
        appAuthProvider.isAuthenticated = false;
        setTimeout(callback, 100);
    },
};

axios.interceptors.request.use(config => {
    if(appAuthProvider.accessToken){
        config.headers.authorization = `Bearer ${appAuthProvider.accessToken}`
    }
    return config;
  });

let AuthContext = React.createContext(null);

function AuthProvider({ children }) {
  let [user, setUser] = React.useState(null);

  let signin = (token, callback) => {
    return appAuthProvider.signin(token, (newUser) => {
      setUser(newUser);
      callback(newUser);
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

function AuthGuard({children}){
    let auth = useAuth()
    let navigate = useHistory()
    useEffect(()=>{
        if(!auth.user){
            navigate('/login', {replace: true})
        }
    })
    return children
}

export { appAuthProvider, AuthContext, AuthProvider, useAuth, AuthGuard };
