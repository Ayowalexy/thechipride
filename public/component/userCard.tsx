import { MotionBox } from "../motion";
import {
  Flex,
  Text,
  useTheme,
  Image,
  HStack,
  VStack,
  Divider,
  Box,
} from "@chakra-ui/react";
import { Outfit } from "./Text";
import { AiFillStar } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { userProps } from "./types";

type userCardProps = {
  data: userProps
}


const UserCard = ({data}: userCardProps): JSX.Element => {
  const theme = useTheme();
  const { black, white, bg1, error } = theme.colors.brand;

  return (
    <MotionBox
      boxShadow="0px 2px 20px 16px #DFDCFF"
      width="23%"
      height="296px"
      padding="20px 10px"
      borderRadius="15px"
      mt={'30px'}
      backgroundColor={white}
    >
      <HStack justify="space-between" align="flex-start">
        <HStack>
          <Image src={data.images} />
          <VStack align="flex-start" spacing={'1px'}>
            <Outfit
              props={{
                color: black,
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
            {data.name}
            </Outfit>
            <HStack>
              <AiFillStar fill="#E49500" />
              <Outfit props={{ color: bg1 }}>0.00</Outfit>
            </HStack>
          </VStack>
        </HStack>

        <BiDotsVerticalRounded size={25} />
      </HStack>

      <VStack align="flex-start" mt="10px" spacing={"3px"}>
        <Outfit
          props={{
            color: black,
            fontWeight: 600,
            fontSize: "15px",
          }}
        >
          {data.type}
        </Outfit>
        <Outfit
          props={{
            color: black,
            fontWeight: 600,
            fontSize: "13px",
          }}
        >
          #12345678VG
        </Outfit>
        <Outfit
          props={{
            color: "#575A74",
            fontWeight: 400,
            fontSize: "10px",
          }}
        >
          Joined, 8 Aug 2021
        </Outfit>
      </VStack>

      <Divider mt={"15px"} />

      <HStack mt={"15px"}>
        <Flex
          padding="7px"
          align="center"
          justify="center"
          backgroundColor="rgba(84, 70, 253, 0.1)"
        >
          <BsTelephoneOutboundFill size={10} />
        </Flex>
        <Flex
          padding="7px"
          align="center"
          justify="center"
          backgroundColor="rgba(84, 70, 253, 0.1)"
        >
          <MdEmail size={10} />
        </Flex>
      </HStack>

      <Divider mt={"15px"} />


      <VStack
        align='flex-start'
        mt="15px"
      >
        <Outfit
          props={{
            color: "#1A051D",
            fontWeight: 400,
            fontSize: "10px",
          }}
        >
          Status
        </Outfit>
        <Outfit
          props={{
            color: data.status === 'Online' ? "#05C48A" : error,
            fontWeight: 400,
            fontSize: "14px",
          }}
        >
          {data.status}
        </Outfit>
      </VStack>
    </MotionBox>
  );
};

export default UserCard;
