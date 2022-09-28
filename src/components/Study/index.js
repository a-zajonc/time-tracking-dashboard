import { ActivityBox } from "../ActivityBox";
import icon from "./icon-study.svg";
import data from "../data.json";

export function Study() {
  return (
    <ActivityBox
      backgroundColor="#FF5C7C"
      icon={icon}
      activityName="Study"
      hoursNumber={data[2].timeframes.weekly.current}
      hoursNumberLastWeek={data[2].timeframes.weekly.previous}
    />
  );
}
