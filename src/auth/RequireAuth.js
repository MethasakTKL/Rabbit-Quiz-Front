import { useLocation, Outlet, Navigate } from "react-router";
import { useAuth, appAuthProvider } from "./auth";
import { useNavigate } from "react-router-dom";

function RequireAuth() {
    let auth = useAuth();
    let location = useLocation();
    let navigate = useNavigate

    if (!appAuthProvider.isAuthenticated) {
        try {
            let username = localStorage.getItem('id_username')
            let password = localStorage.getItem('id_password')
            if (username === null || password === null) {
                return <Navigate to="/login" />;
            }

            auth.signin({ username, password }, (response) => {
                auth.setUser(response)
            })
            return <Outlet />

        } catch (err) {
            console.log("Error", JSON.stringify(err))
            return <Navigate to="/login" />;

        }
    }
    return <Outlet />;
}


export { RequireAuth };