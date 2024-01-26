import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "~/styles/tailwind.css";

import fileRoutes from "./routers/fileRoutes";

const App = () => {
  return (
    <div className="fixed inset-0 min-h-screen w-full overflow-auto font-sans">
      <BrowserRouter basename="/" future={{ v7_startTransition: true }}>
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
                    key={fallback.pathname as any}
                    path={fallback.pathname as any}
                    element={<fallback.component />}
                  />
                );
            }
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const rootElem = document.getElementById("root");

if (rootElem) {
  const isHydrated = rootElem.hasChildNodes();
  if (!isHydrated) {
    const root = createRoot(rootElem);
    root.render(<App />);
  }
}
