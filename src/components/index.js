import { Grid } from "@chakra-ui/react";
import { Profile } from "./Profile";
import { Work } from "./Work";
import { Play } from "./Play";
import { Study } from "./Study";
import { Exercise } from "./Exercise";
import { Social } from "./Social";
import { SelfCare } from "./SelfCare";

export function TimeTrackingDashboard() {
  return (
    <Grid
      h="300px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(4, 1fr)"
      gap={4}
    >
      <Profile />
      <Work />
      <Play />
      <Study />
      <Exercise />
      <Social />
      <SelfCare />
    </Grid>
  );
}
