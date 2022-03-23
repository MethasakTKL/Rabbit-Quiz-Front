import { useLocation, Outlet, Navigate } from "react-router";
import { useAuth, appAuthProvider } from "./auth";
import { useNavigate } from "react-router-dom";

function TeacherGuard() {
    let location = useLocation();

    let isStaff = JSON.parse(localStorage.getItem("user_is_staff"))
    console.log("Is this teacher?")
    console.log(isStaff)
    if (!isStaff) {
        console.log("Hey")
        return <Navigate to="/" state={{ from: location }} />;
    }
    return <Outlet />;

}
export { TeacherGuard };