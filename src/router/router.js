import { createBrowserRouter } from "react-router-dom";

import '../App.css';
import Test from '../Test';
import Products from '../Products';
import Homepage from '../Homepage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/test",
        element: <Test />,
    },
    {
        path: "/products",
        element: <Products />,
    },
]);

export default router;