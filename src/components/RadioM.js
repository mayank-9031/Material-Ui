import React, { useState } from "react";
import { Radio } from "@mui/material";

const RadioM = () => {
  const [gender, setGender] = useState("male");
  const testFunction = (e) => {
    console.warn(e.target.value);
    setGender();
  };

  return (
    <div>
      <h2>Material Ui | Radio Button</h2>
      <div>
        <span>Male</span>
        <Radio
          color="primary"
          value="male"
          checked={gender === "male"}
          onChange={testFunction}
        />
      </div>

      <div>
        <span>Female</span>
        <Radio
          color="primary"
          value="female"
          checked={gender === "female"}
          onChange={testFunction}
        />
      </div>

      <div>
        <span>Other</span>
        <Radio
          color="primary"
          value="other"
          checked={gender === "other"}
          onChange={testFunction}
        />
      </div>
    </div>
  );
};

export default RadioM;
