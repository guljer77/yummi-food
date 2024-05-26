import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Error from "../Pages/ErrorPage/Error";
import DashboardLayouts from "../Layouts/DashboardLayouts";
import PrivateRoute from "./PrivateRoute";
import DashboardHome from "../Dashboard/DashboardHome/DashboardHome";
import AllFood from "../Dashboard/All-Food/AllFood";
import AddFood from './../Dashboard/All-Food/AddFood';
import UpdateFood from "../Dashboard/All-Food/UpdateFood";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayouts />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/all-food",
        element: <AllFood />,
      },
      {
        path: "/dashboard/add-food",
        element: <AddFood />,
      },
      {
        path: "/dashboard/edit-food/:id",
        element: <UpdateFood />,
      },
    ],
  },
]);
