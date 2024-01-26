import fileRoutes from "~/routers/fileRoutes";

const pathNames = fileRoutes.flatMap((route) => route.pathname);

export type PathName = (typeof pathNames)[number];
