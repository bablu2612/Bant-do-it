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
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CloseIcon from "@mui/icons-material/Close";
import AddNewCpdComponent from "./AddNewCpd";
const CpdAndConferencesComponent = () => {
  const [type, setType] = useState("Any");
  const [showAddForm, setShowAddNew] = useState(false);


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
      {!showAddForm ? 
      <Box component="main" className={styles.main} id="wrapper">
        <Box>
          <h2 className="">EVENTS AND CONFERENCES</h2>
          <p className="sub-head">
            If you would like to apply for BANT Recognition and have your event
            listed on this page, please email <a>cpd@bant.org.uk</a>.
          </p>
          <Box className="guidence_link">CPD GUIDANCE</Box>
        </Box>
        <Box className="add button">
          <Box className="form_Group">
            <Button className="MuiButton-containedPrimary" onClick={()=>{setShowAddNew((prev=>!prev))}}>
              <AddIcon /> Add New
            </Button>
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
              control={<Checkbox name="gilad" />}
              label="Include previously listed events"
            />
          </Box>
        </Box>

        <Box className="main_api_data_part">
          <Box className="first_section img">
            <img src="/images/logo.png" />
          </Box>
          <Box className="secound_section">
            <h3>Amanda Swaine DipION, BANT, CNHC</h3>
            <p>
              Intermittent fasting compliance can be hard to achieve. Learn how
              to build personalised programs for clients that support specific
              fasting goals and help them navigate the realities of regular
              fasting.
            </p>
            <strong>EVENT:</strong> Web-based Media (Pre-recorded - view
            anytime)
            <br />
            <strong>EVENT PROVIDER: </strong> INSTITUTE FOR OPTIMUM NUTRITION
            (ION)
            <div>
              <strong>EMAIL: &nbsp;</strong> <a href="#">cpd@ion.ac.uk</a>
            </div>
            <strong>TYPE OF CPD: </strong> Active
            <br />
            <strong>CPD HOURS: </strong>2.00
            <br />
            <strong>COST (£): </strong>36
            <div>
              <strong> REGISTER: &nbsp;</strong>
              <a href="#" target="_blank">
                www.ion.ac.uk/cpd_bantvodif{" "}
              </a>
            </div>
          </Box>

          <Box className="third_section">
            <Box className="edit_sec">
              <EditIcon /> Edit
            </Box>
            <Box className="copy_sec">
              <ContentCopyIcon /> Clone
            </Box>
            <Box className="close_sec">
              <CloseIcon /> Close
            </Box>

            <Box className="rating_hits_sec">Hits 45</Box>
          </Box>
        </Box>
      </Box>
      :

      <AddNewCpdComponent setShowAddNew={()=>{setShowAddNew((prev=>!prev))}} />
            }
    </CpdAndConferencesStyles>
  );
};

export default CpdAndConferencesComponent;
