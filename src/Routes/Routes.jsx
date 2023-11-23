import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home.jsx";
import AddProducts from "../Pages/AddProducts/AddProducts.jsx";

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
        path: "add-products",
        element: <AddProducts></AddProducts>
      }
    ],
  },
]);

export default router;
