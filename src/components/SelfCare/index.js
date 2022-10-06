import { ActivityBox } from "../ActivityBox";
import icon from "./icon-self-care.svg";
import data from "../../data.json";

export function SelfCare({ index, period }) {
  return (
    <ActivityBox
      backgroundColor="#F1C65B"
      icon={icon}
      activityName={data[index].title}
      period={period}
      index={index}
    />
  );
}
