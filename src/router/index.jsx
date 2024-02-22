import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter( [ {
    path: "/",
    element: <Layout />,
    children: [
        {
            path: "/",
            element: <Landing />
        },
        {
            path: "/home",
            element: <Home />
        },
        //TODO: Add routes to view-product details, contact, about us
    ]
}
] )