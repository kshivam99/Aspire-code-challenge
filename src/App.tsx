import React from "react";
import { Box, em, Flex } from "@mantine/core";
import Dashboard from "./pages/Dashboard";
import { Navbar } from "./components/Navbar";
import { useMediaQuery } from "@mantine/hooks";

function App(): JSX.Element {
  const isMobile = useMediaQuery(`(max-width: ${em(740)})`);

  return (
    <Box>
      <Navbar />
      {isMobile ? (
        <Dashboard />
      ) : (
        <Flex>
          <Box style={{ width: 340 }} />
          <Flex flex={1}>
            <Dashboard />
          </Flex>
        </Flex>
      )}
    </Box>
  );
}

export default App;
