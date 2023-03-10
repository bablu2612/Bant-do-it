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

const PhotoDetailsComponent = ({ setShowProductDetails }: any) => {


  return (
    <Box className="form-bg">
      <img src="/Images/pattern.webp" className="bg-pattern" />
      <Box className="box-form">
        <Box>
          <h2 className="">View Applications</h2>
        </Box>
        <Box className="cpdform_add_product_main">
          <Box className="left-side-select">
            <InputLabel>Image File</InputLabel>
            <div className="main-bxImg">
              <button className="chose-btn">Choose file</button>
              <Input type="file" name="file" />
            </div>
          </Box>

          <Box className="right_side-select-details">
            <Box className="form_Group blank_section">
              here is blank section
            </Box>
          </Box>
        </Box>

        <Box className="Button for add_section">
          <Button className="Upload" onClick={() => setShowProductDetails()}>{'<'} Upload</Button>
          <Button className="cancel" onClick={() => setShowProductDetails()}>Cancel </Button>
          <Button className="" onClick={() => setShowProductDetails()} >Skip image upload  {'>'}</Button>

        </Box>
      </Box>
    </Box>
  );
};

export default PhotoDetailsComponent;
