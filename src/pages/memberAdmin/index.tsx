import React from "react";

import withAuth from "@/Auth/withAuth";
import LayoutWithLogin from "@/Layout";
import MemberAdminComponent from "@/PagesComponents/MemberAdmin";

const MemberAdmin = () => {
  return (
    <LayoutWithLogin>
      <MemberAdminComponent />
    </LayoutWithLogin>
  );
};

export default withAuth(MemberAdmin);
