//import custom components
import DashboardLayout from "../../components/DashboardLayout";
import SupportCard from "./components/SupportCard";
import ContactCard from "./components/ContactCard";
import InfoCard from "../Dashboard/components/InfoCard";

//import icon from react-icons
import { IoMdMail } from "react-icons/io";
import { BiSolidMessageRoundedDots } from "react-icons/bi";

//import element from chakraui
import { Stack } from "@chakra-ui/react";

const Support = () => {
  return (
    <DashboardLayout title="Support">
      <Stack spacing="60px">
        <SupportCard
          leftComponent={<ContactCard />}
          icon={IoMdMail}
          title="Contact Us"
          text="Have a question or just want to know more? Feel free to reach out to us."
        />
        <SupportCard
          leftComponent={
            <InfoCard
              imgURL="/Images/Visual.png"
              text="Chat with us now"
              tagText="Chatbot"
            />
          }
          icon={BiSolidMessageRoundedDots}
          title="Live Chat"
          text="Don’t have time to wait for the answer? Chat with us now."
        />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;
