import { Grid } from "@chakra-ui/react";
import { Profile } from "./Profile";
import { Work } from "./Work";
import { Play } from "./Play";
import { Study } from "./Study";
import { Exercise } from "./Exercise";
import { Social } from "./Social";
import { SelfCare } from "./SelfCare";
import { useState } from "react";

export function TimeTrackingDashboard() {
  const [period, setPeriod] = useState("monthly");

  return (
    <Grid
      h="500px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(4, 1fr)"
      gap={7}
    >
      <Profile setPeriod={setPeriod} period={period} />
      <Work />
      <Play />
      <Study />
      <Exercise />
      <Social />
      <SelfCare />
    </Grid>
  );
}
