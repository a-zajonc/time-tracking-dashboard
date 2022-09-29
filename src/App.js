import { ChakraProvider, Box } from "@chakra-ui/react";
import { TimeTrackingDashboard } from "./components";
import { theme } from ".";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        height={{ base: "60vh", lg: "60vh", xl: "100vh" }}
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <TimeTrackingDashboard />
      </Box>
    </ChakraProvider>
  );
}

export default App;
