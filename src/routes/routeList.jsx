import Details from "../pages/detail";
import Details_promo from "../pages/detail_promo";
import Home from "../pages/Home";
export const routeList = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/detail/:id",
        element: <Details/>
    },
    {
        path: "/detail-promo/:id",
        element: <Details_promo/>
    }
]