import React from "react";
import { Button } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useState } from "react";

const ButtonM = () => {
  const [colour, setColour] = useState("success");

  const customMe = () => {
    setColour("secondary");
  };

  return (
    <div>
      <Button
        color={colour}
        variant="contained"
        startIcon={<Delete />}
        onClick={() => {
          setColour("secondary");
        }}
      >
        Click Me
      </Button>
    </div>
  );
};

export default ButtonM;
