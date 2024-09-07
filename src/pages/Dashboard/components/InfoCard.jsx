import { Tag, Text } from "@chakra-ui/react";
import CustomCard from "../../../chakra/CustomCard";

const InfoCard = ({ imgURL, text, tagText, inverted }) => {
  return (
    <CustomCard
      bg={inverted ? "white" : "p.purple"}
      bgImage={imgURL}
      bgRepeat="no-repeat"
      bgSize="cover"
     
    >
      <Tag
        bg={inverted ? "p.purple" : "white"}
        color={inverted ? "white" : "p.purple"}
        borderRadius="2xl"
        py="10px"
        _hover={
          inverted
            ? {
                bg: "black.5",
                color: "black.80",
              }
            : {
                bg: "p.purple",
                color: "white",
              }
        }
      >
        {tagText}
      </Tag>
      <Text
        color={inverted ? "black.80" : "white"}
        textStyle="h5"
        mt="4"
        fontWeight="medium"
      >
        {text}
      </Text>
    </CustomCard>
  );
};

export default InfoCard;
