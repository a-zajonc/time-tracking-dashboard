import { ActivityBox } from "../ActivityBox";
import icon from "./icon-study.svg";

export function Study() {
  return (
    <ActivityBox
      backgroundColor="#FF5C7C"
      icon={icon}
      activityName="Study"
      hoursNumber="4hrs"
      hoursNumberLastWeek="Last week - 7 hrs"
    />
  );
}
