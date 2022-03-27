import { useLocation, Outlet, Navigate } from "react-router";
import { useAuth, appAuthProvider } from "./auth";
import { useNavigate } from "react-router-dom";

function TeacherGuard() {
    let location = useLocation();

    let isStaff = JSON.parse(localStorage.getItem("user_is_staff"))
    if (!isStaff) {
        console.log("Hey! What're you doing!!")
        return <Navigate to="/false-page" state={{ from: location }} />;
    }
    return <Outlet />;

}
export { TeacherGuard };