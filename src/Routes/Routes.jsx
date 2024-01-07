import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home.jsx";
import CategoryDetails from "../Pages/Home/Category/CategoryDetails.jsx";
import AddProducts from "../Pages/AddProducts/AddProducts.jsx";
import Login from "../Pages/Login/Login.jsx";
import Registration from "../Pages/Login/Registration.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Users from "../Pages/Shared/Users/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      }, {
        path: '/toy/:id',
        element:<CategoryDetails/>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      { 
        path: "/registration",
        element: <Registration></Registration>
      },
      {
        path: "/addProducts",
        element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>,
      },
      {
        path: "/users",
        element: <Users></Users>,
      }
    ],
  },
]);

export default router;
