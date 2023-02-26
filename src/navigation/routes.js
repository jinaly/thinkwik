import React from "react";
import Home from "../component/Home";
import Login from "../component/Login";
import Signup from "../component/Signup";
import User from "../component/User";
import UserDetails from "../component/UserDetails";
import UserUpdate from "../component/UserUpdate";

const routes = [
  {
    path: "/",
    component: <Login />,
    exact: true,
  },
  {
    path: "/signup",
    component: <Signup />,
    exact: true,
  },
  {
    path: "/home",
    component: <Home />,
    exact: true,
    isLoggedInRequired: true,
  },
  {
    path: "/user",
    component: <User />,
    exact: true,
    isLoggedInRequired: true,
  },
  {
    path: "/user/:id",
    component: <UserDetails />,
    exact: true,
    isLoggedInRequired: true,
  },
  {
    path: "/update/:id",
    component: <UserUpdate />,
    exact: true,
    isLoggedInRequired: true,
  },
];

export default routes;
