import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Errorpage from "../components/ErrorPage";
import Body from "../components/Body";
import SignUpPage from "../components/SignUpPage";
import Categories from "../components/Categories";
import About from "../components/About";
import Cart from "../components/Cart";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/signUp",
    element: <SignUpPage />,
  },
]);
