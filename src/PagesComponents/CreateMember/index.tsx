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
import TextFieldComp from "components/inputs/TextFieldComponent";

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
      <Box component="main" className={styles.main} id="wrapper">
        <Box className="form-bg">
          <img src="/Images/pattern.webp" className="bg-pattern" />
          <Box className="box-form">
            <Box>
              <h2 className="">View Applications</h2>
            </Box>
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
      </Box>
    </CreateMemberSearchStyles>
  );
};

export default CreateMemberComponent;
