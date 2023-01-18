import React from "react";

import CreateMemberComponent from "@/PagesComponents/CreateMember";
import withAuth from "@/Auth/withAuth";
import LayoutWithLogin from "@/Layout";

const CreateMember = () => {
  return (
    <LayoutWithLogin>
      <CreateMemberComponent />
    </LayoutWithLogin>
  );
};

export default withAuth(CreateMember);
