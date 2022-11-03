import {
  Box,
  Image,
  Flex,
  useTheme,
  Text,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  HStack,
} from "@chakra-ui/react";
import { Outfit, Sora } from "../../public/component/Text";
import { MotionBox } from "../../public/motion";
import IButton from "../../public/component/Button";
import Link from "next/link";

const ForgotPassword = () => {
  const theme = useTheme();
  const { bg3, white, black, placeholder, bg2, error } = theme.colors.brand;
  return (
    <Box backgroundColor={bg3} width="100%" height="100vh">
      <Image src={"/images/svg/logo.svg"} width="300px" p={"40px"} />
      <Flex height="80%" width="100%" justify="center" align="flex-start">
        <Flex
          width="536px"
          boxShadow="0px 2px 20px 16px rgba(223, 220, 255, 0.3)"
          height="418px"
          flexDir="column"
          backgroundColor={white}
          borderRadius="18px"
          justify="center"
          align="center"
        >
          <Image src={"/images/svg/logo.svg"} width="200px" pb={5} />
          <Text
            fontFamily="Sora"
            fontWeight={600}
            fontSize="24px"
            pb={"15px"}
            color={black}
          >
            Forgot Password
          </Text>
          <Text
            fontFamily="Outfit"
            fontWeight={400}
            fontStyle="normal"
            fontSize="16px"
            textAlign="center"
            color={black}
            pb={"15px"}
          >
            Enter your email to get a link to reset <br />
            your password
          </Text>

          <Stack pt={"20px"} spacing={5}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Text
                  fontFamily="Outfit"
                  fontWeight={400}
                  fontStyle="normal"
                  fontSize="12px"
                  color={placeholder}
                  bgColor={bg2}
                  mt={-10}
                  ml={14}
                  padding={"5px"}
                >
                  Your&nbsp;email
                </Text>
              </InputLeftElement>
              <Input
                borderRadius="10px"
                height="58px"
                border="1.5px solid #B1B0B0"
                width="355px"
              />
            </InputGroup>
            <IButton
              height="55px"
              width="355px"
              others={{
                borderRadius: 8,
              }}
            >
              Sign in
            </IButton>

            <HStack align="center" justify="center">
              <Outfit
                props={{
                  fontSize: "16px",
                  color: error,
                  textAlign: "center",
                }}
              >
                Go back to
              </Outfit>
              <Link href="/">
                <Outfit props={{ color: "#5446FD", fontSize: "16px" }}>
                  Sign In
                </Outfit>
              </Link>
            </HStack>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ForgotPassword;
