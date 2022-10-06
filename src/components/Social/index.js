import { ActivityBox } from "../ActivityBox";
import icon from "./icon-social.svg";
import data from "../../data.json";

export function Social({ index, period }) {
  return (
    <ActivityBox
      backgroundColor="#7536D3"
      icon={icon}
      activityName={data[index].title}
      period={period}
      index={index}
    />
  );
}
