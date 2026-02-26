import { createBrowserRouter } from "react-router";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Page1,
  },
  {
    path: "/page-2",
    Component: Page2,
  },
  {
    path: "/page-3",
    Component: Page3,
  },
]);
