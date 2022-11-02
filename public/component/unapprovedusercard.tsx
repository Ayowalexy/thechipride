import { MotionBox } from "../motion";
import { Outfit } from "./Text";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import {
  Text,
  Flex,
  useTheme,
  VStack,
  HStack,
  Image,
  Divider,
} from "@chakra-ui/react";
import { userProps } from "./types";

type cardProps = {
  data: userProps;
};

const UnapprovedUserCard = ({ data }: cardProps): JSX.Element => {
  const theme = useTheme();
  const { black, white, error } = theme.colors.brand;
  return (
    <MotionBox
      width="23%"
      borderRadius="15px"
      backgroundColor={white}
      height="fit-content"
      padding="20px 10px"
      mt={"30px"}
    >
      <HStack>
        <Image src="/images/pngs/img6.png" />
        <VStack align="flex-start" spacing={"-3px"}>
          <Outfit
            props={{
              color: black,
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            {data.name}
          </Outfit>
          <Outfit
            props={{
              color: "#575A74",
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            {data.type}
          </Outfit>
        </VStack>
      </HStack>

      <VStack align="flex-start" spacing={"3px"} mt={"20px"}>
        <Outfit
          props={{
            color: "#575A74",
            fontSize: "16px",
            fontWeight: 400,
          }}
        >
          Hellenkelley@gmail.com
        </Outfit>
        <Outfit
          props={{
            color: "#575A74",
            fontSize: "16px",
            fontWeight: 400,
          }}
        >
          {data.location}
        </Outfit>
        <Outfit
          props={{
            color: "#575A74",
            fontSize: "12px",
            fontWeight: 400,
          }}
        >
          Joined, 8 Aug 2022
        </Outfit>
      </VStack>

      <Divider mt={"25px"} mb={"25px"} />

      <HStack gap={"10px"}>
        <Flex
          padding="7px"
          align="center"
          justify="center"
          backgroundColor="rgba(84, 70, 253, 0.1)"
        >
          <BsTelephoneOutboundFill size={10} />
        </Flex>

        <Outfit
          props={{
            color: "#575A74",
            fontSize: "16px",
            fontWeight: 400,
          }}
        >
          {data.phone}
        </Outfit>
      </HStack>

      <HStack mt={"20px"} gap={"10px"}>
        <Flex
          padding="7px"
          align="center"
          justify="center"
          backgroundColor="rgba(84, 70, 253, 0.1)"
        >
          <MdEmail size={10} />
        </Flex>

        <Outfit
          props={{
            color: "#575A74",
            fontSize: "16px",
            fontWeight: 400,
          }}
        >
          {data.email}
        </Outfit>
      </HStack>

      <Divider mt={"25px"} mb={"25px"} />

      <HStack
        width="100%"
        gap={"5px"}
        borderRadius="8px"
        paddingLeft={"20px"}
        height="30px"
        boxShadow="0px 1px 10px rgba(16, 24, 40, 0.1), 0px 1px 8px rgba(16, 24, 40, 0.06)"
      >
        <Image src="/images/pngs/Iconly.png" />
        <Outfit
          props={{
            color: "#575A74",
            fontSize: "12px",
            fontWeight: 400,
          }}
        >
          National ID png
        </Outfit>
      </HStack>
      <Divider mt={"25px"} mb={"25px"} />

      <Flex
        align="center"
        height="44px"
        width="100%"
        borderRadius="8px"
        backgroundColor={black}
        justify="center"
      >
        <Outfit
          props={{
            color: white,
            fontSize: "15px",
            fontWeight: 500,
          }}
        >
          Approve
        </Outfit>
      </Flex>

      <Flex align="center" width="100%" mt="25px" mb="25px" justify="center">
        <Outfit
          props={{
            color: error,
            fontSize: "15px",
            fontWeight: 600,
          }}
        >
          Block
        </Outfit>
      </Flex>
    </MotionBox>
  );
};

export default UnapprovedUserCard;
