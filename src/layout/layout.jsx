import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../components/navbar/nav/Navbar"
import Footer from "../components/footer/Footer"
import './layout.css'


const Layout = () => {
    const location = useLocation()
    const claseActual = classes[location.pathname]

    return (
        <>
            
            <main className={claseActual}>
                <Outlet />
            </main>
            
        </>
    )
}

export default Layout