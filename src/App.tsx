import React from "react";
import { Box } from "@mantine/core";
import Dashboard from "./pages/Dashboard";
import { Navbar } from "./components/Navbar";

function App(): JSX.Element {
  return (
    <Box>
      <Navbar />
      <Dashboard />
    </Box>
  );
}

export default App;
