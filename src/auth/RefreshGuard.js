import React from 'react'
import { useLocation, Outlet } from "react-router";

function RefreshGuard() {
    // pass
    {
        return <Outlet />
    }
}

export default RefreshGuard