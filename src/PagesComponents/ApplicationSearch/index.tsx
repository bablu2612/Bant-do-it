import React, { useState } from "react";
import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import styles from "@/styles/Home.module.css";
import LayoutWithLogin from "@/Layout";
import ApplicationSearchStyles from "./Application.style";
import { applicationStatus, applicationType } from "./Application.constant";

const ApplicationSearchComponent = () => {
  const [type, setType] = useState("Any");
  const [status, setStatus] = useState("submitted");

  const handleChangeType = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };
  const handleChangeStatus = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };


  return (
    <ApplicationSearchStyles>
      <Box component="main" className={styles.main} id="wrapper">
        <Box className="form-bg">
          <img src="/Images/pattern.webp" className="bg-pattern" />
          <Box className="box-form">
            <Box>
              <h2 className="">View Applications</h2>
            </Box>
            <Box className="form_memberSearch">
              <Box className="form_Group">
                <InputLabel>Application Type</InputLabel>
                <Select
                  className="form_Control"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  onChange={handleChangeType}
                  value={type}
                >
                  <MenuItem value={"Any"}>Any</MenuItem>
                  {applicationType?.map((val, index) => {
                    return (
                      <MenuItem key={index} value={val?.value}>
                        {val?.label}
                      </MenuItem>
                    );
                  })}
                </Select>
              </Box>
              <Box className="form_Group">
                <InputLabel>Application status</InputLabel>
                <Select
                  className="form_Control"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  onChange={handleChangeStatus}
                  value={status}
                >
                  <MenuItem value={"Any"}>Any</MenuItem>
                  {applicationStatus?.map((val, index) => {
                    return (
                      <MenuItem key={index} value={val?.value}>
                        {val?.label}
                      </MenuItem>
                    );
                  })}
                </Select>
              </Box>
              <Box className="form_Group">
                <Button className="MuiButton-containedPrimary">Search</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ApplicationSearchStyles>
  );
};

export default ApplicationSearchComponent;
