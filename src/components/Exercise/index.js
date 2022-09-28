import { ActivityBox } from "../ActivityBox";
import icon from "./icon-exercise.svg";
import data from "../data.json";

export function Exercise() {
  return (
    <ActivityBox
      backgroundColor="#4ACF81"
      icon={icon}
      activityName="Exercise"
      hoursNumber={data[3].timeframes.weekly.current}
      hoursNumberLastWeek={data[3].timeframes.weekly.previous}
    />
  );
}
