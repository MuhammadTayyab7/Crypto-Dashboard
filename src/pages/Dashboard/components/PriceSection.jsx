//import components from chakraUi
import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

//import Dshbord Custom components
import CustomCard from "../../../chakra/CustomCard";

//import icons from react-icons
import { MdArrowOutward } from "react-icons/md";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

//import from react
import { useState } from "react";

const PriceSection = () => {
  const priceArray = ["7:15 AM", "12:55 AM", "6:35 AM", "12:15 PM", "5:55 PM"];
  const [currentPrice, setCurrentPrice] = useState("26,670.25");
  const [changePrice, setChangePrice] = useState("0.04");
  return (
    <CustomCard>
      <Flex justify="space-between" align="start">
        <Stack>
          <Text color="black.80" fontSize="sm">
            Current Price
          </Text>
          <HStack>
            <Flex
              flexDir={{
                sm: "row",
                base: "column",
                md: "column",
                xl: "row",
              }}
              justify="space-between"
             
            >
              <Text
                textStyle={{
                  sm: "h3",
                  base: "h4",
                  md: "h2",
                  lg: "h2",
                  xl: "h2",
                }}
                fontWeight="bold"
                pr="2"
              >
                ${currentPrice}
              </Text>
              <Text color="green">
                <Icon as={MdArrowOutward} />
                {changePrice}%
              </Text>
            </Flex>
          </HStack>
        </Stack>
        <HStack gap={4} >
          <Button color="white" gap="2" bg="purple.500">
            <Icon as={FaCirclePlus} />
            Buy
          </Button>
          <Button color="white" gap="2" bg="purple.500">
            <Icon as={FaCircleMinus} />
            Sell
          </Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded" mt={2}>
        <Flex justify="end">
          <TabList bg="black.5"  p="3px">
            {["1H", "1D", "1W", "1M"].map((value, index) => (
              <Tab
                _selected={{
                  bg: "white",
                }}
                key={index}
                fontSize="sm"
                p="6px"
                borderRadius="4"
              >
                {value}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image mt="2rem" w="full" src="/Images/Graph.png" />
            <HStack justify="space-between" pt="10px">
              {priceArray.map((value, index) => (
                <Text key={index}>
                  <>{value}</>
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>1D</p>
          </TabPanel>
          <TabPanel>
            <p>1W</p>
          </TabPanel>
          <TabPanel>
            <p>1M</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
