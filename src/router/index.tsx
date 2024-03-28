// import BaseLayout from '../layouts/BaseLayout'

import { RouteObject, createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";

const routes = [
  {
    path: "/",
    element: <BaseLayout />,
  },
] satisfies RouteObject[];

const router = createBrowserRouter(routes);

export default router;
