import { ActivityBox } from "../ActivityBox";
import icon from "./icon-self-care.svg";

export function SelfCare({ index, period, activityName }) {
  return (
    <ActivityBox
      backgroundColor="#F1C65B"
      icon={icon}
      activityName={activityName}
      period={period}
      index={index}
    />
  );
}
