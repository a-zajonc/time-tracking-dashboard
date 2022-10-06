import { Grid } from "@chakra-ui/react";
import { Profile } from "./Profile";
import { Work } from "./Work";
import { Play } from "./Play";
import { Study } from "./Study";
import { Exercise } from "./Exercise";
import { Social } from "./Social";
import { SelfCare } from "./SelfCare";
import { useState } from "react";
import data from "../data.json";

export function TimeTrackingDashboard() {
  const [period, onPeriodChange] = useState("weekly");

  return (
    <Grid
      h="500px"
      templateRows={{
        base: "repeat(7, 1fr)",
        lg: "repeat(4, 1fr)",
        xl: "repeat(2, 1fr)",
      }}
      templateColumns={{
        base: "repeat(1, 1fr)",
        lg: "repeat(2, 1fr)",
        xl: "repeat(4, 1fr)",
      }}
      gap={7}
    >
      <Profile onPeriodChange={onPeriodChange} period={period} />
      <Work period={period} index="0" activityName={data[0].title} />
      <Play period={period} index="1" activityName={data[1].title} />
      <Study period={period} index="2" activityName={data[2].title} />
      <Exercise period={period} index="3" activityName={data[3].title} />
      <Social period={period} index="4" activityName={data[4].title} />
      <SelfCare period={period} index="5" activityName={data[5].title} />
    </Grid>
  );
}
