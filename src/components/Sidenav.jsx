//import components from chakra ui
import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react";

//import react icons
import { RxDashboard } from "react-icons/rx";
import { TbMobiledata } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

//import from react router
import { Link, useLocation } from "react-router-dom";

const Sidenav = () => {
  const location = useLocation();
  const isActiveLink = (link) => {
    return location.pathname == link;
  };
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: TbMobiledata,
      text: "Transactions",
      link: "/transactions",
    },
  ];
  return (
    <Stack
      bg="white"
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{
        base: "14rem",
        lg: "16rem",
        md: "16rem",
      }}
      h={{
        md: "full",
        sm: "96vh",
        base: "96vh",
        xl: "full",
      }}
      justify="space-between"
    >
      <Box>
        <Heading
          textAlign="center"
          color="purple"
          fontSize="20px"
          pt="56px"
          as="h1"
        >
          @DOSOMECODING
        </Heading>
        <Box mx="3" mt="6">
          {navLinks.map((nav, index) => (
            <Link key={index} to={nav.link}>
              <HStack
                borderRadius="10px"
                py="3"
                px="4"
                mb="2"
                bg={isActiveLink(nav.link) ? "#F3F3F7" : "transparent"}
                color={isActiveLink(nav.link) ? "#171717" : "#797E82"}
                _hover={{
                  bg: "#F3F3F7",
                  color: "#171717",
                }}
              >
                <Icon as={nav.icon} />
                <Text fontWeight="medium" fontSize="14px">
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>
      <Box mx="3" my="6">
        <Link to="/support">
          <HStack
            borderRadius="10px"
            py="3"
            px="4"
            bg={isActiveLink("/support") ? "#F3F3F7" : "transparent"}
            color={isActiveLink("/support") ? "#171717" : "#797E82"}
            _hover={{
              bg: "#F3F3F7",
              color: "#171717",
              borderRadius: "10px",
            }}
          >
            <Icon as={BiSupport} />
            <Text fontWeight="medium">Support</Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;
