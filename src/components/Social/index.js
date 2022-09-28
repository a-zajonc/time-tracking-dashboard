import { ActivityBox } from "../ActivityBox";
import icon from "./icon-social.svg";
import data from "../data.json";

export function Social() {
  return (
    <ActivityBox
      backgroundColor="#7536D3"
      icon={icon}
      activityName="Social"
      hoursNumber={data[4].timeframes.weekly.current}
      hoursNumberLastWeek={data[4].timeframes.weekly.previous}
    />
  );
}
