import withAuth from "@/Auth/withAuth";
import LayoutWithLogin from "@/Layout";
import ApplicationSearchComponent from "@/PagesComponents/ApplicationSearch";

const ApplicationSearch = () => {
  return (
    <LayoutWithLogin>
      <ApplicationSearchComponent />
    </LayoutWithLogin>
  );
};

export default withAuth(ApplicationSearch);
