import cookies from "js-cookie";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { setToSpecificAmount } from "~/stores/clientVisits/reducer";
import { clientVisitsStore } from "~/stores/clientVisits/store";

const RegisterNewClientVisit = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const registerNewClientVisit = () => {
    const didVisitToday = cookies.get("didVisitToday");
    const clientVisits = cookies.get("clientVisits");

    if (!didVisitToday) {
      cookies.set("didVisitToday", "true", { expires: 1 });
      const visitsCount = clientVisits ? parseInt(clientVisits) : 0;
      const totalVisits = visitsCount + 1;
      cookies.set("clientVisits", `${visitsCount + 1}`, { expires: 1 });
      setToSpecificAmount(totalVisits);
    }
  };

  console.log("registerNewClientVisit");

  useEffect(() => {
    registerNewClientVisit();
  }, []);

  return <>{children}</>;
};

const ClientVisitsProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={clientVisitsStore}>
      <RegisterNewClientVisit>{children}</RegisterNewClientVisit>
    </Provider>
  );
};

export default ClientVisitsProvider;
