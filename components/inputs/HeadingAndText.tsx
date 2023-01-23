import { InputLabel } from "@mui/material";
import React from "react";

const HeadingAndText = ({ heading, text }: any) => {
  return (
    <div>
      <InputLabel>{heading}</InputLabel>
      {text}
    </div>
  );
};

export default HeadingAndText;
