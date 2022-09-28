import { GridItem, Box, Heading, Img, Text } from "@chakra-ui/react";
import ellipsis from "./icon-ellipsis.svg";

export function ActivityBox({
  icon,
  activityName,
  hoursNumber,
  hoursNumberLastWeek,
}) {
  return (
    <GridItem
      colSpan={1}
      bgColor="#FF8C66"
      bgImage={icon}
      bgRepeat="no-repeat"
      bgPosition="top -10px right 15px"
      borderRadius="20px"
      display="flex"
      flexDirection="column-reverse"
    >
      <Box
        height="80%"
        bgColor="#1C1F4A"
        borderRadius="20px"
        padding="30px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading fontSize="18px" fontWeight="500" color="white">
            {activityName}
          </Heading>
          <Img src={ellipsis} alt="Ellipsis" />
        </Box>
        <Text fontSize="50px" color="white" fontWeight="300" pt="10gpx">
          {hoursNumber}
        </Text>
        <Text color="#BDC1FF" fontSize="14px">
          {hoursNumberLastWeek}
        </Text>
      </Box>
    </GridItem>
  );
}