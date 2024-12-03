import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

import ErrorPage from "./pages/ErrorPage";
import AboutMe from "./pages/AboutMe";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
    ],
  },
]);

const rootElement = document.getElementById('root');
if(rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}