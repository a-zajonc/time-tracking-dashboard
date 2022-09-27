import { GridItem, Box, Heading, Text, Img } from "@chakra-ui/react";

export function Profile() {
  return (
    <GridItem
      rowSpan={2}
      colSpan={1}
      bgColor="#1C1F4A"
      borderRadius="20px"
      width="250px"
    >
      <Box
        bgColor="#5847EB"
        borderRadius="20px"
        h="70%"
        p="25px"
        display="grid"
      >
        <Img
          src="image-jeremy.png"
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
          <Heading color="white" fontWeight="300" fontSize="35px">
            Jeremy Robson
          </Heading>
        </Box>
      </Box>
      <Box color="#BDC1FF" fontSize="16px" h="30%" p="25px">
        <Text>Daily</Text>
        <Text color="white">Weekly</Text>
        <Text>Monthly</Text>
      </Box>
    </GridItem>
  );
}
