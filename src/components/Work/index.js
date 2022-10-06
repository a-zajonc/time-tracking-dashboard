import icon from "./icon-work.svg";
import { ActivityBox } from "../ActivityBox";

export function Work({ index, period, activityName }) {
  return (
    <ActivityBox
      backgroundColor="#FF8C66"
      icon={icon}
      activityName={activityName}
      period={period}
      index={index}
    />
  );
}
