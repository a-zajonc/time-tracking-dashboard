import icon from "./icon-work.svg";
import { ActivityBox } from "../ActivityBox";

export function Work() {
  return (
    <ActivityBox
      backgroundColor="#FF8C66"
      icon={icon}
      activityName="Work"
      hoursNumber="32hrs"
      hoursNumberLastWeek="Last week - 36 hrs"
    />
  );
}
