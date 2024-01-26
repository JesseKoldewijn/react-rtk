/* @refresh reload */
import { Route, Router } from "@solidjs/router";
import { Suspense } from "solid-js";
import { render } from "solid-js/web";
import "~/styles/tailwind.css";

import fileRoutes from "./routers/fileRoutes";

const App = () => {
  return (
    <div class="fixed inset-0 min-h-screen w-full overflow-auto font-sans">
      <Router root={(props) => <Suspense>{props.children}</Suspense>}>
        {fileRoutes.flatMap((r) => {
          return <Route path={r.pathname} component={r.component} />;
        })}
      </Router>
    </div>
  );
};

const root = document.getElementById("root");
render(() => <App />, root!);
