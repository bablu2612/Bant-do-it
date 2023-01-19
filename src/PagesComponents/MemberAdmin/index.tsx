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
        <Box className="member_admin">
          <Box className="top_box div_bx">
            <h2 className="">Renewal Date</h2>
            <Box className="">
              <Box>Next Renewal Date</Box>
              <Box className="form_Group">
                <Input type="text" placeholder="01/01/24" className="form_Control" />
              </Box>
              <Box className="btn-cont">
                <Button type="submit"
                  className="MuiButton-containedPrimary">update</Button>
              </Box>
            </Box>
          </Box>

          <Box className="mid_box div_bx">
            <h2 className="">AGM</h2>
            <Button>Reset AGM Attendance</Button>
          </Box>

          <Box className="bottom_box div_bx">
            <h2 className="">Member Status</h2>
            <Button>Convert Renewal Expiry Members to Inactive</Button>
            <Button>Initialise Renewal Period</Button>
          </Box>


          <Box className="Acronym_main  div_bx">
            <h2 className="Acronym">Acronym</h2>
            <Button>Acronym</Button>
          </Box>

        </Box>

      </Box>
    </MemberAdminStyles>
  );
};

export default MemberAdminComponent;
