import { ChakraProvider, Box } from "@chakra-ui/react";
import { TimeTrackingDashboard } from "./components";

function App() {
  return (
    <ChakraProvider>
      <Box>
        <TimeTrackingDashboard />
      </Box>
    </ChakraProvider>
  );
}

export default App;
