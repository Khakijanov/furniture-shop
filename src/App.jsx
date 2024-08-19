// react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// layout
import RootLayout from "./layouts/RootLayout";
// page
import Home from "./page/Home";
import ErrorPage from "./page/ErrorPage";
import Cart from "./page/Cart";
import SingleProductDetails from "./page/SingleProductDetails";
import OurProducts from "./page/OurProducts";
import About from "./page/About";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/singleProductDetails/:id",
          element: <SingleProductDetails />,
        },
        {
          path: "/ourproducts",
          element: <OurProducts />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
