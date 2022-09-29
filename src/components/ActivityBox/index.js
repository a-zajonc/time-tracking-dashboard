import { GridItem, Box, Heading, Text } from "@chakra-ui/react";
import data from "../data.json";
import { EllipsisIcon } from "./EllipsisIcon";

function getCurrentPeriodValue(period, index) {
  if (period === "daily") {
    return data[index].timeframes.daily.current;
  }
  if (period === "monthly") {
    return data[index].timeframes.monthly.current;
  } else {
    return data[index].timeframes.weekly.current;
  }
}

function getPreviousPeriodValue(period, index) {
  if (period === "daily") {
    return data[index].timeframes.daily.previous;
  }
  if (period === "monthly") {
    return data[index].timeframes.monthly.previous;
  } else {
    return data[index].timeframes.weekly.previous;
  }
}

export function ActivityBox({
  backgroundColor,
  icon,
  activityName,
  period,
  index,
}) {
  return (
    <GridItem
      colSpan={1}
      bgColor={backgroundColor}
      bgImage={icon}
      bgRepeat="no-repeat"
      bgPosition={
        activityName === "Exercise" ? "top right 15px" : "top -10px right 15px"
      }
      borderTopRadius="20px"
      borderBottomRadius="50px"
      display="flex"
      flexDirection="column-reverse"
      height={{
        base: "170px",
        xl: "100%",
      }}
    >
      <Box
        height="80%"
        bgColor="#1C1F4A"
        borderRadius="20px"
        padding="30px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        _hover={{ bgColor: "#34397b" }}
        cursor="pointer"
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
          <EllipsisIcon />
        </Box>
        <Box
          display="flex"
          flexDirection={{ base: "row", xl: "column" }}
          justifyContent="space-between"
          alignItems={{ base: "center", xl: "flex-start" }}
        >
          <Text
            fontSize={{ base: "40px", xl: "50px" }}
            color="white"
            fontWeight="300"
            pt="10gpx"
          >
            {getCurrentPeriodValue(period, index)}hrs
          </Text>
          <Text color="#BDC1FF" fontSize="14px">
            Last week - {getPreviousPeriodValue(period, index)}hrs
          </Text>
        </Box>
      </Box>
    </GridItem>
  );
}
