import { Flex, Image, Box, useTheme, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface layoutProps {
  children: ReactNode;
  type: string;
}

export const AuthLayout = ({ type, children }: layoutProps): JSX.Element => {
  const theme = useTheme();
  const {
    colors: { brand: bg, bg1 },
  } = theme;
  return (
    <Flex
      height={type === "Login" ? "100vh" : "115vh"}
      justify="space-between"
      alignItems="flex-start"
      width="100%"
      bgColor={theme.colors.brand.bg1}
    >
      {children}
      {/* <Box flexBasis="50%"></Box> */}
      <Box
        width="50%"
        bgColor="#050C18"
        height="100%"
        bgSize="contain"
        bgPos="center"
        bgRepeat="no-repeat"
        bgImage={{
          base: "/images/pngs/bg.png",
        }}
      >
        {type === "Login" ? (
          <Text
            color={"#fff"}
            fontSize={"25px"}
            fontWeight={600}
            //   pl={'20px'}
            lineHeight={"30px"}
            fontFamily="Ambit"
            textAlign="center"
            pt={"120px"}
          >
            You are just a click away from our <br />
            amazing serives.
          </Text>
        ) : (
          <Text
            color={"#fff"}
            fontSize={"25px"}
            fontWeight={600}
            //   pl={'20px'}
            lineHeight={"30px"}
            fontFamily="Ambit"
            textAlign="center"
            pt={"120px"}
          >
            Don’t have an account?
            <br />
            No problems. Sign Up now.
          </Text>
        )}

        {type === "Login" && (
          <Text
            color={"#fff"}
            fontSize={"25px"}
            fontWeight={600}
            //   pl={'20px'}
            lineHeight={"30px"}
            fontFamily="Ambit"
            textAlign="center"
            pt={"40px"}
          >
            Login to get Started
          </Text>
        )}
      </Box>
    </Flex>
  );
};
