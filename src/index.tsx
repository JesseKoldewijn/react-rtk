/* @refresh reload */
import { Route, Router } from "@solidjs/router";
import { Suspense } from "solid-js";
import { render } from "solid-js/web";
import "~/styles/tailwind.css";

import fileRoutes from "./routers/fileRoutes";

const App = () => {
  return (
    <div>
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
