import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


const Layout = () => {

    return (
        <>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout