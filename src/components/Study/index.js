import { ActivityBox } from "../ActivityBox";
import icon from "./icon-study.svg";
import data from "../data.json";

export function Study({ period, index }) {
  return (
    <ActivityBox
      backgroundColor="#FF5C7C"
      icon={icon}
      activityName={data[index].title}
      period={period}
      index={index}
    />
  );
}
