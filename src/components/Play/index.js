import { ActivityBox } from "../ActivityBox";
import icon from "./icon-play.svg";
import data from "../data.json";

export function Play() {
  return (
    <ActivityBox
      backgroundColor="#56C2E6"
      icon={icon}
      activityName="Play"
      hoursNumber={data[1].timeframes.weekly.current}
      hoursNumberLastWeek={data[1].timeframes.weekly.previous}
    />
  );
}
