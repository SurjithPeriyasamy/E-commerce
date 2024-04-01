import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Errorpage from "../components/ErrorPage";
import Body from "../components/Body";
import Cart from "../components/Cart";
import ProductDetail from "../components/ProductDetail";
import ProductsContainer from "../components/ProductsContainer";
import ProductsCategory from "../components/ProductCategory";
import Stepper from "../components/stepper/Stepper";
import Contact from "../components/Contact";
import { Suspense, lazy } from "react";

const UserProfile = lazy(() => import("../components/user/UserProfile"));
const SignUpPage = lazy(() => import("../components/login/SignUpPage"));
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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/user",
        element: (
          <Suspense
            fallback={<h2 className="font-bold text-xl">Loading!!!...</h2>}
          >
            <UserProfile />
          </Suspense>
        ),
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
    element: (
      <Suspense>
        <SignUpPage />
      </Suspense>
    ),
  },
]);
