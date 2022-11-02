import { MotionBox } from "../motion";
import { Outfit } from "./Text";
import {
  Flex,
  Image,
  Box,
  Text,
  useTheme,
  Divider,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { CiUser } from "react-icons/ci";
import { TbBus } from "react-icons/tb";
import { TfiCar } from "react-icons/tfi";
import { HiOutlineShoppingCart } from "react-icons/hi";

interface serviceCardProps {
  bgImage: string;
  type: string;
}

const ServiceCard = ({ bgImage, type }: serviceCardProps): JSX.Element => {
  const theme = useTheme();
  const { black, bg1 } = theme.colors.brand;
  return (
    <MotionBox width="35%">
      <Box
        bgImage={{
          base: bgImage,
        }}
        width="100%"
        bgSize="cover"
        height="148px"
        padding="10px"
      >
        <Flex
          background="linear-gradient(180deg, rgba(226, 222, 222, 0.7) 0%, #FFFFFF 100%)"
          border="0.2px solid #D0C9D6"
          width="87.17px"
          align="center"
          justify="center"
          height="16.75px"
          borderRadius="6px 8px 0px 6px"
        >
          <Text
            fontFamily="Ambit"
            fontStyle="normal"
            fontWeight={700}
            fontSize="10px"
            lineHeight="14px"
            color={black}
          >
            {type}
          </Text>
        </Flex>
      </Box>

      <VStack spacing="20px" pt="10px" align="flex-start" justify="flex-start">
        <Outfit
          props={{
            color: black,
            fontWeight: 600,
            fontSize: "16px",
          }}
        >
          $150,000
        </Outfit>
        <Divider />
        <HStack spacing="30px">
          <HStack justify="center">
            <CiUser />
            <Outfit
              props={{
                color: bg1,
                fontWeight: 600,
                fontSize: "13px",
              }}
            >
              2000
            </Outfit>
          </HStack>

          <HStack align='center' justify="center">
            {type === "COURIER" ? (
              <TbBus />
            ) : type === "GROCERY" ? (
              <HiOutlineShoppingCart />
            ) : (
              <TfiCar />
            )}
            <Outfit
              props={{
                color: bg1,
                fontWeight: 600,
                fontSize: "13px",
              }}
            >
              40
            </Outfit>
          </HStack>
        </HStack>
      </VStack>
    </MotionBox>
  );
};

export default ServiceCard;
