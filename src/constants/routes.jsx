import { createBrowserRouter } from "react-router";
import PageLayout from "../layouts/PageLayout/PageLayout";
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";
import Product from "../pages/Product/Product";
import { PageRoutes } from "./pageRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PageLayout/>,
        children: [
            {
                path: PageRoutes.commonRoutes.home,
                element: <Home />,
            },
            {
                path: PageRoutes.commonRoutes.category,
                element: <Home />,
            },
            {
                path: PageRoutes.cartRoutes.cart,
                element: <Cart />,
            },
            {
                path: PageRoutes.productRoutes.product,
                element: <Product />,
            },
        ],
    }
]);

export default router;