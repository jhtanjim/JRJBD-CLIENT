import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home.jsx";
import CategoryDetails from "../Pages/Home/Category/CategoryDetails.jsx";

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
      }
    ],
  },
]);

export default router;
