import { ActivityBox } from "../ActivityBox";
import icon from "./icon-exercise.svg";
import data from "../data.json";

export function Exercise({ index, period }) {
  return (
    <ActivityBox
      backgroundColor="#4ACF81"
      icon={icon}
      activityName={data[index].title}
      period={period}
      index={index}
    />
  );
}
