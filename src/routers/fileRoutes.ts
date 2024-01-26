import { lazy } from "solid-js";

const fileRoutes = [
  {
    pathname: "/*404",
    component: lazy(() => import("../pages/*404")),
  },
  {
    pathname: "/",
    component: lazy(() => import("../pages/index")),
  },
];

export default fileRoutes;
