//import components from chakraui
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  HStack,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";

//import react icons
import { AiFillDollarCircle } from "react-icons/ai";
import { PiCurrencyBtcFill } from "react-icons/pi";

//import custom component
import CustomCard from "../../../chakra/CustomCard";

const TransactionSection = () => {
  const transactionData = [
    {
      transactionName: "Deposit",
      date: "2022-06-09",
      time: "7:06 PM",
      amount: "+ $81,123.10",
      icon: AiFillDollarCircle,
    },
    {
      transactionName: "BTC Sell",
      date: "2022-06-09",
      time: "7:06 PM",
      amount: "-12.41235760 BTC",
      icon: PiCurrencyBtcFill,
    },
    {
      transactionName: "Deposit",
      date: "2022-06-09",
      time: "7:06 PM",
      amount: "+ $81,123.10",
      icon: AiFillDollarCircle,
    },
  ];

  return (
    <CustomCard h="full">
      <Text color="black" fontSize="sm">
        Recent Transactions
      </Text>
      {transactionData.map((data, index) => (
        <Flex key={index} justify="space-between" py="5" shadow="sm">
          <HStack>
            <Grid placeItems="center" bg="black.5" borderRadius="full">
              <Icon mx="10px" my="10px" fontSize="25px" as={data.icon} />
            </Grid>
            <Stack spacing={0}>
              <Text fontWeight="bold">{data.transactionName}</Text>
              <HStack>
                <Text color="black.80" fontSize="sm">
                  {data.date}
                </Text>
                <Text color="black.80" fontSize="sm">
                  {data.time}
                </Text>
              </HStack>
            </Stack>
          </HStack>
          <Text
            textStyle={{
              xl: "h6",
            }}
            fontWeight="bold"
          >
            {data.amount}
          </Text>
        </Flex>
      ))}

      <Button w="full" mt="2">View All</Button>
    </CustomCard>
  );
};

export default TransactionSection;
