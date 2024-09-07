//import elements from chakraui
import {
  Box,
  Button,
  Card,
  Checkbox,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";

const ContactCard = () => {
  return (
    <Card p="6" borderRadius="1rem" flexGrow={1}>
      <Stack spacing="6">
        <Text fontWeight="medium" fontSize="sm">
          You will receive response within 24 hours of time of submit.
        </Text>
        <Stack spacing={4}>
          <HStack
            flexDir={{
              base: "column",
              md: "row",
            }}
          >
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Tayyab" />
            </FormControl>
            <FormControl>
              <FormLabel>Surname</FormLabel>
              <Input placeholder="Waqas" />
            </FormControl>
          </HStack>
          <FormControl>
            <FormLabel>Emial</FormLabel>
            <Input type="email" placeholder="name@mail.com" />
          </FormControl>
          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea type="text" placeholder="Your Message" />
          </FormControl>
        </Stack>
        <Checkbox>
          <Text fontSize="xs">
            I agree with
            <Box as="span" color="p.purple" pl="1">
              Terms & Conditions.
            </Box>
          </Text>
        </Checkbox>
        <Stack>
          <Button fontSize="sm">Send a Message</Button>
          <Button fontSize="sm" colorScheme="gray">
            Book a Meeting
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ContactCard;
