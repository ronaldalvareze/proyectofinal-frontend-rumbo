import { Typography } from "@mui/material";
import React from "react";

const FooterTitle = ({ text }) => {
  return (
    <Typography
      variant="p"
      component="p"
      sx={{
        fontWeight: "700",
        textTransform: "capitalize",
        pb: 1,
      }}
    >
      {text}
    </Typography>
  );
};

export default FooterTitle;
