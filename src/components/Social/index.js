import { ActivityBox } from "../ActivityBox";
import icon from "./icon-social.svg";

export function Social({ index, period, activityName }) {
  return (
    <ActivityBox
      backgroundColor="#7536D3"
      icon={icon}
      activityName={activityName}
      period={period}
      index={index}
    />
  );
}
