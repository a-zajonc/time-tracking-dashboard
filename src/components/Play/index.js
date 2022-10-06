import { ActivityBox } from "../ActivityBox";
import icon from "./icon-play.svg";

export function Play({ index, period, activityName }) {
  return (
    <ActivityBox
      backgroundColor="#56C2E6"
      icon={icon}
      activityName={activityName}
      period={period}
      index={index}
    />
  );
}
