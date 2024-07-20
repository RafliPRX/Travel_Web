import Activity_Categorized from "../pages/activisty_categorized";
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
    },
    {
        path: "/categorized/:id",
        element: <Activity_Categorized/>
    },
]