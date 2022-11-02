import {
  Box,
  Input,
  InputGroup,
  Text,
  Flex,
  VStack,
  useTheme,
  Image,
  Stack,
  InputLeftElement,
  InputRightElement,
  HStack,
} from "@chakra-ui/react";
import { AuthLayout } from "../../public/component/AuthLayout";
import { MotionFlex, MotionBox } from "../../public/motion";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import IButton from "../../public/component/Button";
import { Outfit, Sora } from "../../public/component/Text";
import { IBox } from "../../public/component/Custom";
import Link from "next/link";
import { useRouter } from "next/router";

const Login = () => {
  const theme = useTheme();
  const [show, setShow] = useState(false);
  const router = useRouter();
  const { black, bg2, error, placeholder } = theme.colors.brand;
  return (
    <AuthLayout type="Login">
      <Box width="62%">
        <Image src={"/images/svg/logo.svg"} width="300px" p={"40px"} />
        <MotionFlex height="100%" width="100%" justify="center" align="center">
          <Flex
            width="455px"
            flexDir="column"
            justify="center"
            align="center"
            height="653.06px"
            boxShadow="0px 2px 20px 16px #DFDCFF;"
            borderRadius={15}
            backgroundColor={bg2}
          >
            <Image src={"/images/svg/logo.svg"} width="200px" pb={5} />
            <Text
              fontFamily="Sora"
              fontWeight={600}
              fontSize="24px"
              color={black}
            >
              Sign in
            </Text>
            <Text
              fontFamily="Outfit"
              fontWeight={400}
              fontStyle="normal"
              fontSize="16px"
              color={black}
              pb={"15px"}
            >
              Input your details to get started
            </Text>

            <Stack pt={"20px"} spacing={5}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={
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
                  }
                />
                <Input
                  borderRadius="10px"
                  height="58px"
                  border="1.5px solid #B1B0B0"
                  width="355px"
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={
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
                      Password
                    </Text>
                  }
                />
                <Input
                  borderRadius="10px"
                  height="58px"
                  type={show ? "text" : "password"}
                  border="1.5px solid #B1B0B0"
                  width="355px"
                />
                <InputRightElement
                  mt="9px"
                  onClick={() => setShow(!show)}
                  children={
                    show ? (
                      <AiOutlineEye size={23} />
                    ) : (
                      <AiOutlineEyeInvisible size={23} />
                    )
                  }
                />
              </InputGroup>

              <Link href='/forgot-password'>
                <Outfit
                  props={{
                    fontSize: "12px",
                    color: error,
                    textAlign: "right",
                  }}
                >
                  Forgot password?
                </Outfit>
              </Link>

              <IButton
                height="55px"
                width="355px"
                others={{
                  borderRadius: 8,
                  onClick: () => router.push('/dashboard')
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
                  Don’t have an account?
                </Outfit>
                <Link href="/sign-up">
                  <Outfit props={{ color: "#5446FD", fontSize: "16px" }}>
                    Sign up
                  </Outfit>
                </Link>
              </HStack>

              <HStack align="center" justify="center" pt={"5px"}>
                <Box flexGrow={1} border="0.5px solid #D0C9D6" />
                <Sora props={{ color: "#575A74", fontSize: "12px" }}>
                  Or Sign In With
                </Sora>
                <Box flexGrow={1} border="0.5px solid #D0C9D6" />
              </HStack>

              <HStack justify="space-between" pt={"20px"}>
                <IBox>
                  <Image src={"/images/svg/google.svg"} />
                </IBox>

                <IBox>
                  <Image src={"/images/svg/apple.svg"} />
                </IBox>

                <IBox>
                  <Image src={"/images/svg/fb.svg"} />
                </IBox>
              </HStack>
            </Stack>
          </Flex>
        </MotionFlex>
      </Box>
    </AuthLayout>
  );
};

export default Login;
