import React from "react";
import { Box, em, Flex } from "@mantine/core";
import Dashboard from "./pages/Dashboard";
import { Navbar } from "./components/Navbar";
import { useMediaQuery } from "@mantine/hooks";
import DashboardGrid from "./pages/DashboardGrid";

function App(): JSX.Element {
  const isMobile = useMediaQuery(`(max-width: ${em(1059)})`);

  return (
    <Box>
      <Navbar />
      {isMobile ? <Dashboard /> : <DashboardGrid />}
    </Box>
  );
}

export default App;
