import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import Tooltip from '@mui/material/Tooltip';


import "./CreateProductIcon.css";

function CreateProductIcon() {
  const navigate = useNavigate();

  return (
    <>
      <Tooltip title="Upload Product" placement="top-start" arrow>

        <AddCircleIcon
          className="createIcon"
          sx={{ color: "#F2CC8F" }}
          // onMouseEnter={() => setHover(true)}
          // onMouseLeave={() => setHover(false)}
          onClick={() => navigate("/createproduct")}
        />
      </Tooltip>

    </>
  );
}

export default CreateProductIcon;
