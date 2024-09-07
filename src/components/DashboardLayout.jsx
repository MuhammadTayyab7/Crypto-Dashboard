import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import Sidenav from "./Sidenav";
import TopNav from "./TopNav";
import SideDrawer from "./SideDrawer";

function DashboardLayout({ title, children }) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box>
      <Flex>
        <Box
          display={{
            base: "none",
            lg: "flex",
          }}
        >
          <Sidenav />
        </Box>
        <SideDrawer isOpen={isOpen} onClose={onClose} />
        <Box flexGrow={1}>
          <TopNav title={title} onOpen={onOpen} />
          <Container
            overflowX="hidden"
            overflowY="auto"
            h="calc(100vh - 88px)"
            maxW="70rem"
            mt="6"
            pb="6"
          >
            {children}
          </Container>
        </Box>
      </Flex>
    </Box>
  );
}

export default DashboardLayout;
