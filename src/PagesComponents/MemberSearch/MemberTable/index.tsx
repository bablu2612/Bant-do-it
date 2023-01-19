import { Box } from "@mui/material";
import React from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Name",
    selector: "title",
    sortable: true,
  },
  {
    name: "Member No",
    selector: "memberNo",
    sortable: true,
  },
  {
    name: "Membership Type",
    selector: "memberShipType",
    sortable: true,
  },
  {
    name: "Region",
    selector: "region",
    sortable: true,
  },
  {
    name: "Active",
    selector: "active",
    sortable: true,
  },
  {
    name: "On Register",
    selector: "onRegister",
    sortable: true,
  },
  {
    name: "On Web",
    selector: "onWeb",
    sortable: true,
  },
  {
    name: "",
    selector: "",
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    memberNo: "234",
    memberShipType: "Abc",
    region: "bgv",
    active: "no",
    onRegister: "esd",
    onWeb: "bnm",
  },
  {
    id: 2,
    title: "Ghostbusters",
    memberNo: "234",
    memberShipType: "Abc",
    region: "bgv",
    active: "no",
    onRegister: "esd",
    onWeb: "bnm",
  },
];
const MemberTable = () => {
  return (
    <Box sx={{ marginTop: "100px", width: "80%", marginLeft: "250px" }}>
      <DataTable columns={columns as any} data={data} />
    </Box>
  );
};

export default MemberTable;
