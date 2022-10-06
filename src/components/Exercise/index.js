import { ActivityBox } from "../ActivityBox";
import icon from "./icon-exercise.svg";

export function Exercise({ index, period, activityName }) {
  return (
    <ActivityBox
      backgroundColor="#4ACF81"
      icon={icon}
      activityName={activityName}
      period={period}
      index={index}
    />
  );
}
