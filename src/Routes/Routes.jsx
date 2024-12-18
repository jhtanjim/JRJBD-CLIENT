import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home.jsx";
import AllProduct from "../Pages/Shared/AllProduct/AllProduct.jsx";
import Engines from "../Pages/Shared/AllProduct/Engines.jsx";
import About from "../Pages/Home/About/About.jsx";
import Boat from "../Pages/Shared/AllProduct/Boat.jsx";
import MarineEquipment from "../Pages/Shared/AllProduct/MarineEquipment.jsx";
import Generator from "../Pages/Shared/AllProduct/Generator.jsx";
import Services from "../Pages/Home/Services/Services.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services/>,
      },
     
      {
        path: "/allproduct",
        element: <AllProduct />,
      },
      {
        path: "/engines/:id", 
        element: <Engines />,
      },
      {
        path: "/boats/:id", 
        element: <Boat />,
      },
      {
        path: "/marineEquipments/:id", 
        element: <MarineEquipment />,
      },
      {
        path: "/generators/:id", 
        element: <Generator />,
      },
    ],
  },
]);

export default router;
