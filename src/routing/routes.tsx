import { createBrowserRouter } from "react-router-dom";
import Checkout from "../components/Checkout";
import Home from "../components/Home";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/checkout", element: <Checkout /> },
]);

export default router;
