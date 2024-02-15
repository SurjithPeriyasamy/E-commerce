import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Errorpage from "../components/ErrorPage";
import Body from "../components/Body";
import SignUpPage from "../components/login/SignUpPage";
import About from "../components/About";
import Cart from "../components/Cart";
import UserProfile from "../components/user/UserProfile";
import ProductDetail from "../components/ProductDetail";
import ProductsContainer from "../components/ProductsContainer";
import ProductsCategory from "../components/ProductCategory";
import Stepper from "../components/stepper/Stepper";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <ProductsContainer />,
          },
          { path: "/category/:name", element: <ProductsContainer /> },
        ],
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/user",
        element: <UserProfile />,
      },
      { path: "/products/category/:name", element: <ProductsCategory /> },
      {
        path: "/products/:productId",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Stepper />,
      },
    ],
  },
  {
    path: "/signUp",
    element: <SignUpPage />,
  },
]);
