import { Icon } from "@chakra-ui/react";

export function EllipsisIcon() {
  return (
    <Icon
      width="21"
      height="5"
      color="#BBC0FF"
      _hover={{ color: "white", stroke: "white" }}
    >
      <path
        d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
        fill="currentColor"
        fill-rule="evenodd"
      />
    </Icon>
  );
}
