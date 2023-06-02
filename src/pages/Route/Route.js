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
import Register from "../Authentication/RegisterEmail";
import Login from "../Authentication/Login/LoginEmail";
import OrderFood from "../Order/OrderFood/OrderFood";
import AuthLanding from "../Authentication/AuthLanding/AuthLanding";
import LoginLayout from "../../layout/LoginLayout";
import SignUpLayout from "../../layout/SignUpLayout";
import BlogSingle from "../Blog/blogSingle/BlogSingle";
import OneMoreStep from "../Authentication/Register/OneMoreStep";
import Profile from "../Profile/Profile";
import Settings from "../Settings/Settings";
import Confirm from "../Confirm/Confirm";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <FrontPage></FrontPage>,
  },
  {
    path: "/home",
    element: <Main></Main>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/home/order",
        element: <Order></Order>,
      },
      {
        path: "/home/chef",
        element: <Chef></Chef>,
      },
      {
        path: "/home/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/home/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/home/blogSingle",
        element: <BlogSingle></BlogSingle>,
      },
      {
        path: "/home/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/home/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/home/setting",
        element: <Settings></Settings>,
      },
      {
        path: "/home/confirm",
        element: <Confirm></Confirm>,
      },
      {
        path: "/home/order/:category",
        element: <OrderFood></OrderFood>,
        loader: ({ params }) =>
          fetch(`https://food-ex-server-production.up.railway.app/api/v1/food/${params.category}`),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthenticationLayout></AuthenticationLayout>,
    children: [
      {
        path: "/auth/landing",
        element: <AuthLanding></AuthLanding>,
      },
    ],
  },
  {
    path: "/auth/login",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/auth/login/email",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/auth/register",
    element: <SignUpLayout></SignUpLayout>,
    children: [
      {
        path: "/auth/register/email",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/auth/one",
    element: <OneMoreStep></OneMoreStep>,
  },
]);

export default Route;
