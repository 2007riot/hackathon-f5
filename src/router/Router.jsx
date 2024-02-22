import { createBrowserRouter } from "react-router-dom"
import LandingPage from "../pages/LandingPage"
import HomePage from "../pages/HomePage"
import ContactPage from "../pages/ContactPage"
import Layout from "../layout/Layout"

export const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
        {
            path: "/",
            element: <LandingPage />
        },
        {
            path: "/home",
            element: <HomePage />
        },
        {
            path: "/contact",
            element: <ContactPage />
        }
        //TODO: Add routes to view-product details, contact, about us
    ]
}
]
)