import { lazy } from "react";

const fileRoutes = [
  {
    pathname: "/*404" as const,
    component: lazy(() => import("../pages/*404")),
  },
  {
    pathname: "/" as const,
    component: lazy(() => import("../pages/index")),
  },
];

export default fileRoutes;
