import { createBrowserRouter } from "react-router";
import SinglePage from "./pages/SinglePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: SinglePage,
  },
]);
