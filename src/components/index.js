import { Box } from "@chakra-ui/react";
import { Profile } from "./Profile";
import { Work } from "./Work";
import { Play } from "./Play";
import { Study } from "./Study";
import { Exercise } from "./Exercise";
import { Social } from "./Social";
import { SelfCare } from "./SelfCare";

export function TimeTrackingDashboard() {
  return (
    <Box>
      <Profile />
      <Work />
      <Play />
      <Study />
      <Exercise />
      <Social />
      <SelfCare />
    </Box>
  );
}
