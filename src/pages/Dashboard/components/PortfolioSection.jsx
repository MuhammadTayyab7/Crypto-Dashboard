// Import components from Chakra UI
import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { useState } from "react";

// Import React icons
import { IoInformationCircleSharp } from "react-icons/io5";
import { LuArrowDownToLine } from "react-icons/lu";
import { LuArrowUpToLine } from "react-icons/lu";

const PortfolioSection = () => {
  const [totalBalance, setTotalBalance] = useState("122,31.24");
  const [btcBalance, setBtcBalance] = useState("22.394010");
  const [currentBalance, setCurrentBalance] = useState("13,00000.00");

  const balanceArray = [
    {
      heading: "Total Portfolio Value",
      balance: totalBalance,
      currency: "",
    },
    {
      heading: "Wallet Balance",
      balance: btcBalance,
      currency: "BTC",
    },
    {
      heading: "Current Balance",
      balance: currentBalance,
      currency: "PKR",
    },
  ];

  return (
    <HStack
      bg="white"
      borderRadius="xl"
      p="6"
      justify="space-between"
      align={{
        base: "flex-start",
        xl: "center",
      }}
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <HStack
        spacing={{
          sm: 12,
          base: 4,
          md: 10,
          lg: 16,
          xl: 14,
        }}
        align={{
          sm: "center",
          md: "center",
          base: "flex-start",
          xl: "center",
        }}
        flexDir={{
          sm: "row",
          base: "column",
          md: "col",
          xl: "row",
        }}
      >
        {balanceArray.map((value, index) => (
          <Stack key={index}>
            <HStack color="black.80">
              <Text fontSize="sm">{value.heading}</Text>
              {index > 0 ? null : <Icon as={IoInformationCircleSharp} />}
            </HStack>
            <HStack>
              {index == 0 ? (
                <Text
                  textStyle={{
                    sm: "h3",
                    base: "h4",
                    md: "h2",
                    lg: "h2",
                    xl: "h2",
                  }}
                  fontWeight="bold"
                >
                  ${value.balance}
                </Text>
              ) : (
                <Text
                  textStyle={{
                    sm: "h3",
                    base: "h4",
                    md: "h2",
                    lg: "h2",
                    xl: "h2",
                  }}
                  fontWeight="bold"
                >
                  {value.balance}
                </Text>
              )}
              {index > 0 ? (
                <Tag bg="black.10" borderRadius="xl" px="8px" py="4px">
                  {value.currency}
                </Tag>
              ) : null}
            </HStack>
          </Stack>
        ))}
      </HStack>
      <HStack mt={4} gap={4}>
        <Button color="white" gap="1" bg="purple.500">
          <Icon as={LuArrowDownToLine} />
          Deposit
        </Button>
        <Button color="white" gap="1" bg="purple.500">
          <Icon as={LuArrowUpToLine} />
          Withdraw
        </Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
