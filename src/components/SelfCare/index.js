import { ActivityBox } from "../ActivityBox";
import icon from "./icon-self-care.svg";

export function SelfCare() {
  return (
    <ActivityBox
      backgroundColor="#F1C65B"
      icon={icon}
      activityName="Self Care"
      hoursNumber="2hrs"
      hoursNumberLastWeek="Last week - 2 hrs"
    />
  );
}
