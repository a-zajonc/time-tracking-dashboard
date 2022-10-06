import icon from "./icon-work.svg";
import { ActivityBox } from "../ActivityBox";
import data from "../../data.json";

export function Work({ index, period }) {
  return (
    <ActivityBox
      backgroundColor="#FF8C66"
      icon={icon}
      activityName={data[index].title}
      period={period}
      index={index}
    />
  );
}
