import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  InputLabel,
} from "@mui/material";
import HeadingAndText from "components/inputs/HeadingAndText";
import EditMemberCommonLayout from "@/PagesComponents/EditMemberFaces/EditMemberFaces.constent";
import ButtonComponent from "components/inputs/ButtonComponent";
import { Add, Edit } from "@mui/icons-material";
import TableComponent from "components/inputs/TableComponent";
import SelectComponent from "components/inputs/SelectComponent";
import TextFieldComp from "components/inputs/TextFieldComponent";
import { EditApplicationPopUpstyle } from "./styles/styles";

const EditApplicationPopup = ({ open, setOpen }: any) => {
  return (
    <Dialog onClose={() => setOpen(false)} open={open}>
      <EditApplicationPopUpstyle>
        <DialogTitle>Membership Application 010101010</DialogTitle>
        <DialogContent>
          <Box>
            <HeadingAndText heading="App Type" text="Membership" />
            <HeadingAndText heading="App Sub Type" text="New" />
            <HeadingAndText heading="App Date" text="Sun, 1 Jan" />
            <HeadingAndText heading="Total Fee" text="£ 75.00" />
            <HeadingAndText
              heading="Started Date/Time"
              text="Fri, 11 Nov 14:55"
            />
            <HeadingAndText
              heading="Submitted Date/Time"
              text="Fri, 20 Jan 12:01"
            />
            <HeadingAndText heading="App Status" text="Submitted" />
            <HeadingAndText heading="Last Modified By" text="xyz@gmail.com" />
            <HeadingAndText heading="Existing Provider" text="Membership" />
            <HeadingAndText heading="Attachments" text="Link" />
            <HeadingAndText heading="App Content" text="Xyz xyz" />
            <Box className="">
              <EditMemberCommonLayout heading="Qualifications">
                <Box>
                  Here are your currently listed qualifications. To add new
                  qualifications or make amendments, please contact the BANT
                  administration team.
                </Box>
                <TableComponent
                  theadValues={[
                    { label: "Course", value: "course" },
                    { label: "Institute", value: "institute" },
                    { label: "Start Date", value: "startDate" },
                    { label: "Graduation Date", value: "graduationDate" },
                    { label: "Edit", value: "action" },
                  ]}
                  rowData={[
                    {
                      id: 1,
                      course: (
                        <div>
                          GDip Integrative Functional Nutrition + Practice
                          (Primary)
                        </div>
                      ),
                      institute: "North",
                      startDate: "M2 6AF",
                      graduationDate: "07751694508",
                      action: (
                        <div className="tables_actions">
                          <ButtonComponent
                            classes="edit_action"
                            onClick={() => alert("hello")}
                          >
                            <Edit /> Edit
                          </ButtonComponent>
                        </div>
                      ),
                    },
                  ]}
                />
                <ButtonComponent onClick={() => console.log("hello")}>
                  <Add />
                  New Qualification
                </ButtonComponent>
              </EditMemberCommonLayout>
            </Box>
            <HeadingAndText heading="Membership Type" text="Student" />
            <SelectComponent
              name="membership_period"
              value={"APPLICATION_PENDING"}
              label="Membership Period"
              options={[
                { label: "Full Year", value: "APPLICATION_PENDING" },
                { label: "Half year", value: "MEMBERSHIP_PENDING" },
              ]}
              onChange={() => console.log("select")}
            />
            <TextFieldComp
              id="name_field"
              name="feeAdjustment"
              onChange={() => console.log("hello")}
              label="Fee Adjustment"
            />
            <InputLabel>Admin Comments</InputLabel>
            <textarea id="textArea" rows={4} cols={50}></textarea>
          </Box>
        </DialogContent>
      </EditApplicationPopUpstyle>
    </Dialog>
  );
};

export default EditApplicationPopup;
