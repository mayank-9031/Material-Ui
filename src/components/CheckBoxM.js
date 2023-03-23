import React, { useState } from "react";
import { Checkbox } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { FavoriteBorder } from "@mui/icons-material";

const CheckBoxM = () => {
  const [name, setName] = useState([]);

  const getValue = (e) => {
    let data = name;
    data.push(e.target.value);
    console.warn(data);
  };

  return (
    <div>
      <h2>Material UI | CheckBox</h2>
      <Checkbox color="primary" value="anil" onChange={(e) => getValue(e)} />
      <Checkbox color="primary" value="sam" onChange={(e) => getValue(e)} />
      <Checkbox color="primary" value="peter" onChange={(e) => getValue(e)} />
      <Checkbox
        color="primary"
        value="xyz"
        indeterminate
        onChange={(e) => getValue(e)}
      />
      <Checkbox
        value="abc"
        color="secondary"
        onChange={(e) => getValue(e)}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
      />
    </div>
  );
};

export default CheckBoxM;
