import React from "react";
import { Button } from "@mui/material";

const BasicButton = ({ title, type, onClick, variant }) => {
  return (
    <Button
      className="button"
      variant={variant}
      type={type}
      onClick={onClick}
      data-testid="button"
    >
      {title}
    </Button>
  );
};

export default BasicButton;
