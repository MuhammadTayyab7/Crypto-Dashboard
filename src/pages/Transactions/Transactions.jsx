//import components from chakraui
import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
} from "@chakra-ui/react";

//import components from dashboard
import DashboardLayout from "../../components/DashboardLayout";

//import icons from react-icon
import { LuDownload } from "react-icons/lu";
import { GoSearch } from "react-icons/go";

//import components from transaction
import TransactionTable from "./components/TransactionTable";

const Transactions = () => {
  const tabs = [
    { name: "All", count: 349 },
    { name: "Deposite", count: 114 },
    { name: "Withdraw", count: 213 },
    { name: "Trade", count: 22 },
  ];
  return (
    <DashboardLayout title="Transactions">
      <Flex justify="end">
        <Button gap="2" my="4">
          <Icon as={LuDownload} />
          Export CSV
        </Button>
      </Flex>
      <Card borderRadius="1rem">
        <Tabs>
          <TabList pt="4" display="flex" justifyContent="space-between">
            <HStack>
              {tabs.map((tab, inedx) => (
                <Tab key={inedx} display="flex" gap="4" pb="4">
                  {tab.name}{" "}
                  <Tag colorScheme="gray" borderRadius="full">
                    {tab.count}
                  </Tag>
                </Tab>
              ))}
            </HStack>
            <InputGroup maxW="280px " pr="6">
              <InputLeftElement pointerEvents="none">
                <Icon as={GoSearch} />
              </InputLeftElement>
              <Input type="" placeholder="Search by ID or destination" />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default Transactions;
