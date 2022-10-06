import { ActivityBox } from "../ActivityBox";
import icon from "./icon-study.svg";

export function Study({ period, index, activityName }) {
  return (
    <ActivityBox
      backgroundColor="#FF5C7C"
      icon={icon}
      activityName={activityName}
      period={period}
      index={index}
    />
  );
}
