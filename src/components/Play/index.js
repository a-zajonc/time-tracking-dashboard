import { ActivityBox } from "../ActivityBox";
import icon from "./icon-play.svg";

export function Play() {
  return (
    <ActivityBox
      backgroundColor="#56C2E6"
      icon={icon}
      activityName="Play"
      hoursNumber="10hrs"
      hoursNumberLastWeek="Last week - 8 hrs"
    />
  );
}
