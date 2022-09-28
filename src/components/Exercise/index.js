import { ActivityBox } from "../ActivityBox";
import icon from "./icon-exercise.svg";

export function Exercise() {
  return (
    <ActivityBox
      backgroundColor="#4ACF81"
      icon={icon}
      activityName="Exercise"
      hoursNumber="4hrs"
      hoursNumberLastWeek="Last week - 5 hrs"
    />
  );
}
