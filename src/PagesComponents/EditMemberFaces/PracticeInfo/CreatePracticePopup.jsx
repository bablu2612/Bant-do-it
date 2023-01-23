import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
} from "@mui/material";
import TextFieldComp from "components/inputs/TextFieldComponent";
import EditMemberCommanLayout from "../EditMemberFaces.constent";
import SelectComponent from "components/inputs/SelectComponent";
import CheckBoxComponent from "components/inputs/CheckboxComponent";
import ButtonComponent from "components/inputs/ButtonComponent";
import { CreatePracticePopupStyle } from "./Styles/styles";

const CreatePracticePopup = ({ open, setOpen }) => {
  return (
    <Dialog onClose={() => setOpen(false)} open={open}>
      <CreatePracticePopupStyle>
        <DialogContent>
          <Box className="main">
            <EditMemberCommanLayout heading={`Practice Details`}>
              <TextFieldComp
                id="name_field"
                name="practiceName"
                onChange={() => console.log("hello")}
                label="Practice Name"
              />
              <TextFieldComp
                id="name_field"
                name="email"
                onChange={() => console.log("hello")}
                label="E-mail"
              />
              <TextFieldComp
                id="name_field"
                name="website"
                onChange={() => console.log("hello")}
                label="Website http://"
              />
              <TextFieldComp
                id="name_field"
                name="skype"
                onChange={() => console.log("hello")}
                label="Skype"
              />
              <TextFieldComp
                id="name_field"
                name="linkedIn"
                onChange={() => console.log("hello")}
                label="LinkedIn http://www.linkedin.com/"
              />
              <TextFieldComp
                id="name_field"
                name="twitter"
                onChange={() => console.log("hello")}
                label="Twitter http://www.twitter.com/"
              />
              <TextFieldComp
                id="name_field"
                name="facebook"
                onChange={() => console.log("hello")}
                label="Facebook http://www.facebook.com/"
              />
              <TextFieldComp
                id="name_field"
                name="instagram"
                onChange={() => console.log("hello")}
                label="Instagram http://www.instagram.com/"
              />
              <TextFieldComp
                id="name_field"
                name="blogsite"
                onChange={() => console.log("hello")}
                label="Blogsite http://"
              />
              <TextFieldComp
                id="name_field"
                name="telephone"
                onChange={() => console.log("hello")}
                label="Telephone"
              />
              <TextFieldComp
                id="name_field"
                name="telephoneMobile"
                onChange={() => console.log("hello")}
                label="Telephone (Mobile)"
              />
              <TextFieldComp
                id="name_field"
                name="fax"
                onChange={() => console.log("hello")}
                label="Fax"
              />
            </EditMemberCommanLayout>
            <EditMemberCommanLayout heading={`Address`}>
              <SelectComponent
                name="membership_status"
                value={"APPLICATION_PENDING"}
                label="Post Code Lookup"
                options={[
                  {
                    label: "Application Pending",
                    value: "APPLICATION_PENDING",
                  },
                  { label: "Membership Pending", value: "MEMBERSHIP_PENDING" },
                  { label: "Renewal Due", value: "RENEWAL_DUE" },
                ]}
                onChange={() => console.log("select")}
              />
              <ButtonComponent>Enter Address</ButtonComponent>
              <TextFieldComp
                id="name_field"
                name="organisation"
                onChange={() => console.log("hello")}
                label="Organisation"
              />
              <TextFieldComp
                id="name_field"
                name="property"
                onChange={() => console.log("hello")}
                label="Property"
              />
              <TextFieldComp
                id="name_field"
                name="street"
                onChange={() => console.log("hello")}
                label="Street"
              />
              <CheckBoxComponent
                key="id"
                name="showstreet "
                defaultChecked={false}
                onChange={() => console.log("hello")}
                label="Show street in search"
              />
              <TextFieldComp
                id="name_field"
                name="town"
                onChange={() => console.log("hello")}
                label="Town"
              />
              <TextFieldComp
                id="name_field"
                name="localAuthority"
                onChange={() => console.log("hello")}
                label="Local Authority"
              />
              <TextFieldComp
                id="name_field"
                name="county"
                onChange={() => console.log("hello")}
                label="County"
              />
              <TextFieldComp
                id="name_field"
                name="postCode"
                onChange={() => console.log("hello")}
                label="Post Code"
              />
              <SelectComponent
                name="membership_status"
                value={"APPLICATION_PENDING"}
                label="BANT Region"
                options={[
                  {
                    label: "Application Pending",
                    value: "APPLICATION_PENDING",
                  },
                  { label: "Membership Pending", value: "MEMBERSHIP_PENDING" },
                  { label: "Renewal Due", value: "RENEWAL_DUE" },
                ]}
                onChange={() => console.log("select")}
              />
            </EditMemberCommanLayout>
          </Box>
        </DialogContent>
        <DialogActions>
          <ButtonComponent>Save</ButtonComponent>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
        </DialogActions>
      </CreatePracticePopupStyle>
    </Dialog>
  );
};

export default CreatePracticePopup;
