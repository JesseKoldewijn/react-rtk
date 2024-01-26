import React from "react";

import ClientVisitsProvider from "./clientVisits";

const GlobalProvidersRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ClientVisitsProvider>{children}</ClientVisitsProvider>
    </>
  );
};

export default GlobalProvidersRoot;
