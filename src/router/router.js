import { createBrowserRouter } from "react-router-dom";

import '../App.css';
import Test from '../Test';
import ProductsList from '../ProductsList';
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
        path: "/products-list",
        element: <ProductsList />,
    },
]);

export default router;