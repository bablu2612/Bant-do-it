import withAuth from "@/Auth/withAuth";
import MemberSearchComponent from "@/PagesComponents/MemberSearch";
import React from "react";

const MemberSearch = () => {
  return <MemberSearchComponent />;
};

export default withAuth(MemberSearch);
