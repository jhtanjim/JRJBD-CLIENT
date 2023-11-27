import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home.jsx";
import AddProducts from "../Pages/AddProducts/AddProducts.jsx";
import Login from "../Pages/Login/Login.jsx";
import Registration from "../Pages/Login/Registration.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      { 
        path: "/registration",
        element: <Registration></Registration>
      }
    ],
  },
]);

export default router;
