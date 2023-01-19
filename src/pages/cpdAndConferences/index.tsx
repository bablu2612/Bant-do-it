import withAuth from "@/Auth/withAuth";
import LayoutWithLogin from "@/Layout";
import CpdAndConferencesComponent from "@/PagesComponents/CpdAndConferences";

const CpdAndConferences = () => {
  return (
    <LayoutWithLogin>
      <CpdAndConferencesComponent />
    </LayoutWithLogin>
  );
};

export default withAuth(CpdAndConferences);
