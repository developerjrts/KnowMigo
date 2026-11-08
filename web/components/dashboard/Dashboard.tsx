import { Box } from "@mui/material";
import React from "react";
import Welcome from "./Welcome";

const Dashboard = () => {
  return (
    <Box className="flex w-full flex-col gap-2">
      <Welcome />
    </Box>
  );
};

export default Dashboard;
