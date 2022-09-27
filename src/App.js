import { ChakraProvider, Box } from "@chakra-ui/react";
import { TimeTrackingDashboard } from "./components";
import { theme } from ".";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        height="100vh"
        bgColor="#0F1424"
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
