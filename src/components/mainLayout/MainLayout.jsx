import { Outlet, useLocation } from "react-router-dom"


function MainLayout() {
    return (
        <main>
            <Outlet />
        </main>
    )
}

export default MainLayout
