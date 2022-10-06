import { ActivityBox } from "../ActivityBox";
import icon from "./icon-play.svg";

import data from "../../data.json";

export function Play({ index, period }) {
  return (
    <ActivityBox
      backgroundColor="#56C2E6"
      icon={icon}
      activityName={data[index].title}
      period={period}
      index={index}
    />
  );
}
