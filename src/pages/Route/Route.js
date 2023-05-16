import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import FrontPage from "../FontPage/FrontPage";
import Home from "../Home/Home/Home";
import Chef from "../Chef/Chef";
import Blog from "../Blog/Blog";
import Cart from "../Cart/Cart";
import Order from "../Order/Order";
import AboutUs from "../AboutUs/AboutUs";
import AuthenticationLayout from "../../layout/AuthenticationLayout";
import Register from "../Authentication/Register";
import Login from "../Authentication/Login/Login";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <FrontPage></FrontPage>
    },
    {
        path : '/home',
        element : <Main></Main>,
        children : [
            {
                path : '/home',
                element : <Home></Home>
            },
            {
                path:"/home/order",
                element : <Order></Order>
            },
            {
                path : '/home/chef',
                element : <Chef></Chef>
            },
            {
                path :'/home/cart',
                element : <Cart></Cart>
            },
            {
                path:'/home/blog',
                element : <Blog></Blog>
            },
            {
                path : '/home/aboutUs',
                element : <AboutUs></AboutUs>
            }
        ]
    },
    {
        path : '/auth',
        element: <AuthenticationLayout></AuthenticationLayout>,
        children : [
            {
                path : '/auth/register',
                element : <Register></Register>
            },
            {
                path : '/auth/login',
                element : <Login></Login>
            }
        ]
    }
])

export default Route;