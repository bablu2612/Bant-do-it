import { Box } from "@mui/material";
import ButtonComponent from "components/inputs/ButtonComponent";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import EditApplicationPopup from "./EditApplicationPopup";

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
  const [open, setOpen] = useState(false);
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
      cell: (row: any) => {
        return (
          <ButtonComponent
            onClick={() => {
              setOpen(true);
            }}
          >
            View/Edit
          </ButtonComponent>
        );
      },
    },
  ];
  return (
    <Box>
      <Box className="Heading">Application Search</Box>
      <Box className="table-responsive">
        <Box className="table">
          <DataTable columns={columns as any} data={data} />
          <EditApplicationPopup open={open} setOpen={setOpen} />
        </Box>
      </Box>
    </Box>
  );
};

export default ApplicationTable;
