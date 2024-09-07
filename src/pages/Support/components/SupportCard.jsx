//import elements from chakraui
import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";

//import custom component

const SupportCard = ({ leftComponent, icon, title, text }) => {
  return (
    <Flex
      gap={6}
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <Stack maxW="24rem" p="2">
        <Icon as={icon} color="p.purple" boxSize="24px " />
        <Text as="h1" textStyle="h1" fontWeight="medium">
          {title}
        </Text>
        <Text fontSize="sm" color="black.60">
          {text}{" "}
        </Text>
      </Stack>
      <Box maxW="650px" w="full"> {leftComponent}</Box>
    </Flex>
  );
};

export default SupportCard;
