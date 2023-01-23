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
import CpdAndConferencesStyles from "./CpdAndConferences.styles";
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
      {!showAddForm ? (
        <>
          <Box className="main_event">
            <Box className="conf_event">
              <h2 className="">EVENTS AND CONFERENCES</h2>
              <p className="sub-head">
                If you would like to apply for BANT Recognition and have your
                event listed on this page, please email <a>cpd@bant.org.uk</a>.
              </p>
            </Box>
            <Box className="add_button d_Flex">
              <Box className="guidence_link">CPD GUIDANCE</Box>
              <Button
                className="MuiButton-containedPrimary"
                onClick={() => {
                  setShowAddNew((prev) => !prev);
                }}
              >
                <AddIcon /> Add New
              </Button>
            </Box>
            <Box className="cpdform_main">
              <Box className="d_Flex search_cstm">
                <Box className="left-side">
                  <h3 className="">SEARCH EVENTS</h3>
                </Box>

                <Box className="right_side">
                  <Button className="MuiButton-containedPrimary">search</Button>
                </Box>
              </Box>
            </Box>

            <Box className="checkbox_box form_Group">
              <FormControlLabel
                control={<Checkbox name="gilad" />}
                className="form_Control"
                label="Include previously listed events"
              />
            </Box>
          </Box>
          <Box className="main_api_data_part">
            <div className="Heading">Blog</div>
            <Box className="Blog">
              <Box className="first_section img">
                <img src="/images/logo.png" />
              </Box>
              <Box className="secound_section">
                <h3>Amanda Swaine DipION, BANT, CNHC</h3>
                <p>
                  Intermittent fasting compliance can be hard to achieve. Learn
                  how to build personalised programs for clients that support
                  specific fasting goals and help them navigate the realities of
                  regular fasting.
                </p>
                <strong>EVENT:</strong> Web-based Media (Pre-recorded - view
                anytime)
                <br />
                <strong>EVENT PROVIDER: </strong> INSTITUTE FOR OPTIMUM
                NUTRITION (ION)
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

              <Box className="left-side-select">
                <Box className="form_Group">
                  <Button
                    className="MuiButton-containedPrimary"
                    onClick={() => {
                      setShowAddNew((prev) => !prev);
                    }}
                  >
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
                    <Button className="MuiButton-containedPrimary">
                      search
                    </Button>
                  </Box>
                </Box>

                <Box className="left-side-select"></Box>

                <Box className="right_side-select">
                  <Box className="form_Group"></Box>
                </Box>
              </Box>
            </Box>
            :
            <Box className="main_api_data_part">
              <Box className="first_section img">
                <img src="/images/logo.png" />
              </Box>
            </Box>
          </Box>
        </>
      ) : (
        <AddNewCpdComponent
          setShowAddNew={() => {
            setShowAddNew((prev) => !prev);
          }}
        />
      )}
    </CpdAndConferencesStyles>
  );
};

export default CpdAndConferencesComponent;
