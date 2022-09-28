import icon from "./icon-work.svg";
import { ActivityBox } from "../ActivityBox";
import data from "../data.json";

export function Work() {
  return (
    <ActivityBox
      backgroundColor="#FF8C66"
      icon={icon}
      activityName="Work"
      hoursNumber={data[0].timeframes.weekly.current}
      hoursNumberLastWeek={data[0].timeframes.weekly.previous}
    />
  );
}
