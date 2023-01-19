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
import LayoutWithLogin from "@/Layout";
import CpdAndConferencesStyles from "./CpdAndConferences.styles";
import TextFieldComp from "components/inputs/TextFieldComponent";
import AddIcon from '@mui/icons-material/Add';
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
    <CpdAndConferencesStyles>
      <Box>
        <h2 className="dash">EVENTS AND CONFERENCES</h2>
        <p className="sub-head">If you would like to apply for BANT Recognition and have your event listed on this page, please email <a>cpd@bant.org.uk</a>.</p>
        <Box className="guidence_link">CPD GUIDANCE</Box>
      </Box>
      <Box className="add button">
        <Box className="form_Group">
          <Button className="MuiButton-containedPrimary"><AddIcon /> Add New</Button>
        </Box>
      </Box>
      <Box className="cpdform_main">
        <Box>

          <Box className="left-side">
            <h3 className="">SEARCH EVENTS</h3>

          </Box>

          <Box className="form_Group right_side">
            <Button className="MuiButton-containedPrimary">search</Button>
          </Box>
        </Box>


        <Box className="left-side-select">
          <Box className="form_Group">
            <InputLabel>Type of Event</InputLabel>
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
            <InputLabel>CPD Provider</InputLabel>
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

        <Box className="2-nd-section">
          <Box className="cp_provider_main">
            <InputLabel>CPD Provider</InputLabel>
            <Input name="cp_provider" />
          </Box>

          <Box className="cp_Location_main">
            <InputLabel>Location</InputLabel>
            <Input name="cp_Location" />
          </Box>

          <Box className="date_from_main">
            <InputLabel>Date From</InputLabel>
            <Input type="date" name="date_from" />
          </Box>


          <Box className="date_to_main">
            <InputLabel>Date To</InputLabel>
            <Input type="date" name="date_to" />
          </Box>

        </Box>

        <Box className="checkbox_box">
          <FormControlLabel
            control={
              <Checkbox name="gilad" />
            }
            label="Include previously listed events"
          />
        </Box>

      </Box>



      <Box className="main_api_data_part">
        <Box className="first_section">
          <img src="/images/logo.png" />
        </Box>
        <Box className="secound_section">

        </Box>

        <Box className="third_section">

        </Box>
      </Box>
    </CpdAndConferencesStyles>
  );
};

export default CpdAndConferencesComponent;
