import { Box } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import DataTable from "react-data-table-component";

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
  const router = useRouter();
  const columns = [
    {
      name: "Name",
      selector: "title",
      sortable: true,
      cell: (row: any) => {
        return (
          <Box
            sx={{ color: "#1ea7fd", cursor: "pointer" }}
            onClick={() => router.push("/editmemberfaces")}
          >
            {row.title}
          </Box>
        );
      },
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
  return (
    <Box>
      <Box className="Heading">Member Search</Box>
      <Box className="table-responsive">
        <Box className="table">
          <DataTable columns={columns as any} data={data} />
        </Box>
      </Box>
    </Box>
  );
};

export default MemberTable;
