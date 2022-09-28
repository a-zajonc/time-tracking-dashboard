import { ActivityBox } from "../ActivityBox";
import icon from "./icon-social.svg";

export function Social() {
  return (
    <ActivityBox
      backgroundColor="#7536D3"
      icon={icon}
      activityName="Social"
      hoursNumber="5hrs"
      hoursNumberLastWeek="Last week - 10 hrs"
    />
  );
}
