import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Flex,
  Text,
  Tag,
} from "@chakra-ui/react";

const TransactionTable = () => {
  const tableData = [
    {
      id: "HD82NA2H",
      date_time: {
        date: "2022-06-09",
        time: "07:06 PM",
      },
      type: {
        name: "Deposite",
        tag: "E-Transfer",
      },
      amount: "+ $81,123.10",
      status: "Pending",
    },
    {
      id: "HD82NA2H",
      date_time: {
        date: "2022-06-09",
        time: "07:06 PM",
      },
      type: {
        name: "Withdraw",
        tag: "Wire Transfer",
      },
      amount: "+ $81,123.10",
      status: "Processing",
    },
    {
      id: "HD82NA2H",
      date_time: {
        date: "2022-06-09",
        time: "07:06 PM",
      },
      type: {
        name: "Buy",
        tag: "",
      },
      amount: "+ $81,123.10",
      status: "Cancelled",
    },
    {
      id: "HD82NA2H",
      date_time: {
        date: "2022-06-09",
        time: "07:06 PM",
      },
      type: {
        name: "Sell",
        tag: "",
      },
      amount: "+ $81,123.10",
      status: "Completed",
    },
    {
      id: "HD82NA2H",
      date_time: {
        date: "2022-06-09",
        time: "07:06 PM",
      },
      type: {
        name: "BTC Deposite",
        tag: "",
      },
      amount: "+ $81,123.10",
      status: "Completed",
    },
    {
      id: "HD82NA2H",
      date_time: {
        date: "2022-06-09",
        time: "07:06 PM",
      },
      type: {
        name: "BTC Withdraw",
        tag: "",
      },
      amount: "+ $81,123.10",
      status: "Completed",
    },
  ];

  const statusColor = {
    Pending: "#797E82",
    Processing: "#F5A50B",
    Cancelled: "#DC2626",
    Completed: "#059669",
  };
  return (
    <TableContainer>
      <Table variant="simple" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Date & Time</Th>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody color="p.black">
          {tableData.map((data, index) => (
            <Tr key={index}>
              <Td fontWeight="medium" fontSize="sm">
                {data.id}
              </Td>
              <Td>
                <Flex flexDir="column">
                  <Text fontWeight="medium" fontSize="sm">
                    {data.date_time.date}
                  </Text>
                  <Text fontSize="xs" color="black.60">
                    {data.date_time.time}
                  </Text>
                </Flex>
              </Td>
              <Td>
                <Flex flexDir="column">
                  <Text fontWeight="medium" fontSize="sm">
                    {data.type.name}
                  </Text>
                  <Text fontSize="xs" color="black.60">
                    {data.type?.tag}
                  </Text>
                </Flex>
              </Td>
              <Td fontWeight="medium" fontSize="sm">
                {data.amount}
              </Td>
              <Td fontWeight="medium" fontSize="sm">
                <Tag color="white" bg={statusColor[data.status]} borderRadius="full">
                  {data.status}
                </Tag>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
