import { ChakraProvider, Box } from "@chakra-ui/react";
import { TimeTrackingDashboard } from "./components";
import { theme } from ".";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <TimeTrackingDashboard />
      </Box>
    </ChakraProvider>
  );
}

export default App;
