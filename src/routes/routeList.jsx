import Activity_Categorized from "../pages/activisty_categorized";
import Admin_activ from "../pages/Admin_page_activity";
import Admin_banner from "../pages/Admin_page_banner";
import Admin_category from "../pages/Admin_page_cetegory";
import Admin_promo from "../pages/Admin_page_promo";
import Admin from "../pages/Admin_page_user";
import Create_Activ from "../pages/create_Activ";
import Create_Banner from "../pages/create_banner";
import Create_Category from "../pages/create_category";
import Create_Promo from "../pages/create_promo";
import Details from "../pages/detail";
import Details_activity from "../pages/detail_activity";
import Detail_form from "../pages/detail_form";
import Detail_form_activ from "../pages/detail_form_activ";
import Detail_form_category from "../pages/detail_form_category";
import Detail_form_promo from "../pages/detail_form_promo";
import Details_promo from "../pages/detail_promo";
import Explore from "../pages/explore";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Sign_up from "../pages/Sign-up";
import Profile from "../pages/User_profile";
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
    },
    {
        path: "/Admin",
        element: <Admin/>
    },
    {
        path: "/Admin_banner",
        element: <Admin_banner/>
    },
    {
        path: "/Admin_banner_detail/:id",
        element: <Detail_form/>
    },
    {
        path: "/Create_Banner",
        element: <Create_Banner/>
    },
    {
        path: "/Admin_Promo",
        element: <Admin_promo/>
    },
    {
        path: "/Admin_Category",
        element: <Admin_category/>
    },
    {
        path: "/Admin_Activ",
        element: <Admin_activ/>
    },
    {
        path: "/Admin_promo_detail/:id",
        element: <Detail_form_promo/>
    },
    {
        path:"/Create_Promo",
        element: <Create_Promo/>,
    },
    {
        path:"/Create_Activ",
        element: <Create_Activ/>,
    },
    {
        path: "/Admin_category_detail/:id",
        element: <Detail_form_category/>
    },
    {
        path: "/Create_Category",
        element: <Create_Category/>
    },
    {
        path: "/Admin_activity_detail/:id",
        element: <Detail_form_activ/>
    },
    {
        path: "/Profile",
        element: <Profile/>
    },
]