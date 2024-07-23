import Activity_Categorized from "../pages/activisty_categorized";
import Details from "../pages/detail";
import Details_activity from "../pages/detail_activity";
import Details_promo from "../pages/detail_promo";
import Explore from "../pages/explore";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Sign_up from "../pages/Sign-up";
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
    {
        path: "/activity-detail/:id",
        element: <Details_activity/>
    },
    {
        path: "/explore",
        element: <Explore/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/Sign-up",
        element: <Sign_up/>
    }
]