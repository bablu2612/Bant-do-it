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
import MemberAdminStyles from "./MemberAdminCpdAndConferences.styles";

const MemberAdminComponent = () => {


  return (
    <MemberAdminStyles>
      <Box component="main" className={styles.main} id="wrapper">

      <Box>
        <h2 className="">Renewal Date</h2>
        <Box className="">
          <Box>Next Renewal Date</Box>
          <Box><Input type="text" placeholder="01/01/24" /></Box>
          <Box><Button >update</Button></Box>

        </Box>
      </Box>

      <Box>
        <h2 className="">AGM</h2>
          <Button>Reset AGM Attendance</Button>
      </Box>

      <Box>
        <h2 className="">Member Status</h2>
          <Button>Convert Renewal Expiry Members to Inactive</Button>
          <Button>Initialise Renewal Period</Button>

      </Box>


      <Box className="Acronym_main">
        <h2 className="Acronym">Acronym</h2>
          <Button>Acronym</Button>
      </Box>


      </Box>
    </MemberAdminStyles>
  );
};

export default MemberAdminComponent;
