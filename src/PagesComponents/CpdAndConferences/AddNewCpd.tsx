import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Input,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import styles from "@/styles/Home.module.css";

const CpdAndConferencesComponent = () => {
  const [type, setType] = useState("Any");

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  const typeOfEvent = [
    {
      label: "Any",
      value: "Any",
    },
    {
      label: "Web-based Media (Pre-recorded - view anytime)",
      value: "fellow",
    },
    {
      label: "Web-based Media (Live Event - specific time)",
      value: "fellowDiscounted",
    },
  ];

  return (
      <Box component="main" className={styles.main} id="wrapper">
        <Box>
          <h2 className="">Type of Event / Activity</h2>
        
        </Box>
       
        <Box className="cpdform_main">
         

          <Box className="left-side-select">
            <Box className="form_Group">
              <InputLabel>What kind of event / activity is it?</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                onChange={handleChange}
                value={type}
              >
                <MenuItem value={""}>Any</MenuItem>
                {typeOfEvent?.map((val, index) => {
                  return (
                    <MenuItem key={index} value={val?.value}>
                      {val?.label}
                    </MenuItem>
                  );
                })}
              </Select>
            </Box>
          </Box>

          <Box className="right_side-select">
            <Box className="form_Group">
              <InputLabel>Event / Activity Title</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                onChange={handleChange}
                value={type}
              >
                <MenuItem value={""}>Any</MenuItem>
                {typeOfEvent?.map((val, index) => {
                  return (
                    <MenuItem key={index} value={val?.value}>
                      {val?.label}
                    </MenuItem>
                  );
                })}
              </Select>
            </Box>
          </Box>

         
        </Box>

       
      </Box>
  );
};

export default CpdAndConferencesComponent;
