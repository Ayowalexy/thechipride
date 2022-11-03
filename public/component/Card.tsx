import { Box, Flex, Text, useTheme, VStack } from "@chakra-ui/react";
import { MotionBox, MotionFlex } from "../motion";
import { Outfit } from "./Text";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface cardProps {
  title: string;
  value: string;
  color: string;
}

const Card = ({title, value, color}: cardProps) => {
  const theme = useTheme();
  const { white, black } = theme.colors.brand;
  return (
    <MotionFlex
      height="104px"
      background={white}
      boxShadow="0px 2px 20px 16px #DFDCFF"
      borderRadius="15px"
      width="23%"
      align="center"
      justify="space-around"
    >
      <VStack align="flex-start">
        <Text
          fontStyle="normal"
          fontWeight={600}
          fontSize="16px"
          lineHeight="18px"
          color="#575A74"
          fontFamily="Ambit, Outfit"
        >
          {title}
        </Text>
        <Outfit
          props={{
            color: black,
            fontSize: "24px",
            fontWeight: 700,
          }}
        >
          {value}
        </Outfit>
      </VStack>
      <MotionBox
        width="60px"
        height='60px'
      >
        <CircularProgressbar
        strokeWidth={20}
        styles={buildStyles({
            strokeLinecap: 'round',
            pathColor: color,
            trailColor: '#ECE9F1',
          })}
         value={66}/>;
      </MotionBox>
    </MotionFlex>
  );
};

export default Card;
