import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "~/styles/tailwind.css";

import Navbar from "./components/layout/navbar";
import GlobalProvidersRoot from "./providers";
import fileRoutes from "./routers/fileRoutes";

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

const App = () => {
  return (
    <div className="fixed inset-0 min-h-screen w-full overflow-auto font-sans">
      <Suspense>
        <GlobalProvidersRoot>
          <BrowserRouter basename="/" future={{ v7_startTransition: true }}>
            <Navbar />
            <Routes>
              {fileRoutes.flatMap((r) => {
                switch (r.pathname) {
                  case "/":
                    return (
                      <Route
                        key={r.pathname}
                        path={r.pathname}
                        element={<r.component />}
                      />
                    );
                  case "/*404":
                    return (
                      <Route
                        key={r.pathname}
                        path={"*"}
                        element={<r.component />}
                      />
                    );
                  default:
                    const fallback = r as any;

                    return (
                      <Route
                        key={fallback.pathname}
                        path={fallback.pathname}
                        element={<fallback.component />}
                      />
                    );
                }
              })}
            </Routes>
          </BrowserRouter>
        </GlobalProvidersRoot>
      </Suspense>
    </div>
  );
};
export default App;
