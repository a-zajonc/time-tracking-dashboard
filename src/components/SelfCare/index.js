import { ActivityBox } from "../ActivityBox";
import icon from "./icon-self-care.svg";
import data from "../data.json";

export function SelfCare() {
  return (
    <ActivityBox
      backgroundColor="#F1C65B"
      icon={icon}
      activityName="Self Care"
      hoursNumber={data[5].timeframes.weekly.current}
      hoursNumberLastWeek={data[5].timeframes.weekly.previous}
    />
  );
}
