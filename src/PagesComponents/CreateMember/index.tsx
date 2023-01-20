import React, { useState } from "react";
import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import styles from "@/styles/Home.module.css";
import LayoutWithLogin from "@/Layout";
import CreateMemberSearchStyles from "./CreateMember.styles";

const CreateMemberComponent = () => {
  const [type, setType] = useState("associate");

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  const MemeberShipTypes = [
    {
      label: "Associate",
      value: "associate",
    },
    {
      label: "Fellow",
      value: "fellow",
    },
    {
      label: "Fellow Discounted",
      value: "fellowDiscounted",
    },
  ];

  return (
    <CreateMemberSearchStyles>
      <Box className="dash">
        Member Applications
      </Box>
      <Box className="form-bg">
        <img src="/images/pattern.webp" className="bg-pattern" />
        <Box className="box-form">
          <h2>Create Member</h2>
          <Box className="form_memberSearch">
            <Box className="form_Group">
              <InputLabel>Membership Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                onChange={handleChange}
                value={type}
              >
                <MenuItem value={""}>Any</MenuItem>
                {MemeberShipTypes?.map((val, index) => {
                  return (
                    <MenuItem key={index} value={val?.value}>
                      {val?.label}
                    </MenuItem>
                  );
                })}
              </Select>
            </Box>
            {/* <TextFieldComp id="name_field" name="Name" errors="this is not good" onChange={() => console.log('hello')} /> */}
            <Box className="form_Group">
              <InputLabel>Last Name</InputLabel>
              <TextField className="form_Control" error={false} />
            </Box>
            <Box className="form_Group">
              <Button className="MuiButton-containedPrimary">Create</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </CreateMemberSearchStyles>
  );
};

export default CreateMemberComponent;
