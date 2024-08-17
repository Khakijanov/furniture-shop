// react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// layout
import RootLayout from "./layouts/RootLayout";
// page
import Home from "./page/Home";
import ErrorPage from "./page/ErrorPage";

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
