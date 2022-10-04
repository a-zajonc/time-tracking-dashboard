import { GridItem, Box, Heading, Text, Img } from "@chakra-ui/react";
import photo from "./image-jeremy.png";

function ChoosePeriod({ setPeriod, period, name }) {
  return (
    <Text
      width="fit-content"
      _hover={{ color: "white" }}
      cursor="pointer"
      onClick={() => setPeriod(name)}
      color={period === name ? "white" : "#BDC1FF"}
    >
      {name.charAt(0).toUpperCase() + name.slice(1)}
    </Text>
  );
}

export function Profile({ period, setPeriod }) {
  return (
    <GridItem
      rowSpan={{ base: "1", lg: "1", xl: "2" }}
      colSpan={{ base: "1", lg: "2", xl: "1" }}
      bgColor="#1C1F4A"
      borderRadius="20px"
      width={{ base: "350px", lg: "100%", xl: "250px" }}
    >
      <Box
        bgColor="#5847EB"
        borderRadius="20px"
        h="70%"
        p="25px"
        display="flex"
        flexDirection={{ base: "row", lg: "row", xl: "column" }}
        alignItems={{ base: "center", lg: "center", xl: "baseline" }}
        justifyContent="space-evenly"
      >
        <Img
          src={photo}
          alt="Profile Photo"
          h="80px"
          borderColor="white"
          borderWidth="3px"
          borderStyle="solid"
          borderRadius="full"
        />
        <Box>
          <Text color="#BDC1FF" fontSize="16px">
            Report for
          </Text>
          <Heading
            color="white"
            fontWeight="300"
            fontSize={{ base: "26px", xl: "35px" }}
          >
            Jeremy Robson
          </Heading>
        </Box>
      </Box>
      <Box
        fontSize="16px"
        h="30%"
        p="25px"
        display="flex"
        flexDirection={{
          base: "row",
          xl: "column",
        }}
        justifyContent="space-between"
        alignItems={{ base: "center", xl: "flex-start" }}
      >
        <ChoosePeriod setPeriod={setPeriod} period={period} name="daily" />
        <ChoosePeriod setPeriod={setPeriod} period={period} name="weekly" />
        <ChoosePeriod setPeriod={setPeriod} period={period} name="monthly" />
      </Box>
    </GridItem>
  );
}
