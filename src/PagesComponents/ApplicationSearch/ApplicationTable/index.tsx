import { Box } from "@mui/material";
import React from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Id",
    selector: "id",
    sortable: true,
  },
  {
    name: "Type",
    selector: "type",
    sortable: true,
  },
  {
    name: "Sub-Type",
    selector: "subType",
    sortable: true,
  },
  {
    name: "Status",
    selector: "status",
    sortable: true,
  },
  {
    name: "Applicant User",
    selector: "applicantUser",
    sortable: true,
  },
  {
    name: "Started Date",
    selector: "startedDate",
    sortable: true,
  },
  {
    name: "Submitted Date",
    selector: "submittedDate",
    sortable: true,
  },
  {
    name: "Approved Date",
    selector: "approvedDate",
  },
  {
    name: "Total fee",
    selector: "totalFee",
  },
  {
    name: "Application Content",
    selector: "applicationContent",
  },
  {
    name: "Actions",
    selector: "actions",
  },
];

const data = [
  {
    id: 1,
    type: "sdfs",
    subType: "dsfds",
    status: "Re",
    applicantUser: "sdf",
    startedDate: "sdfsd",
    submittedDate: "sdfsd",
    approvedDate: "sdfsdf",
    totalFee: "sdfsdf",
    applicationContent: "dsf",
    actions: "dsfsdf",
  },
  {
    id: 2,
    type: "sdfs",
    subType: "dsfds",
    status: "tr",
    applicantUser: "sdf",
    startedDate: "sdfsd",
    submittedDate: "sdfsd",
    approvedDate: "sdfsdf",
    totalFee: "sdfsdf",
    applicationContent: "dsf",
    actions: "dsfsdf",
  },
];
const ApplicationTable = () => {
  return (
    <Box sx={{ marginTop: "100px", width: "80%", marginLeft: "250px" }}>
      <DataTable columns={columns as any} data={data} />
    </Box>
  );
};

export default ApplicationTable;
