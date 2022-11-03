import {
  Box,
  Flex,
  Text,
  HStack,
  VStack,
  useTheme,
  Image,
} from "@chakra-ui/react";
import { Outfit } from "../../public/component/Text";
import Layout from "../../public/component/Layout";
import { BsArrowLeft } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
import DriverTable from "../../public/component/driverTable";

const DriverProfile = () => {
  const theme = useTheme();
  const { black } = theme.colors.brand;

  return (
    <Layout>
      <Box padding="50px" width="100%" height="fit-content">
        <HStack width="100%" justify="space-between">
          <VStack align="flex-start" spacing="70px">
            <HStack spacing="10px">
              <Link href="/users">
                {" "}
                <BsArrowLeft />
              </Link>
              <Outfit
                props={{
                  color: black,
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                Damola Afolabi
              </Outfit>
              <AiFillStar fill="#E49500" />
              <Outfit
                props={{
                  color: black,
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                0.0
              </Outfit>
            </HStack>

            <HStack>
              <Image src="/images/pngs/Group.png" />
              <VStack align="flex-start" spacing="-2px">
                <Outfit
                  props={{
                    color: black,
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                >
                  Driver
                </Outfit>
                <Outfit
                  props={{
                    color: "#575A74",
                    fontSize: "16px",
                    fontWeight: 400,
                  }}
                >
                  Joined, 8 Aug 2022
                </Outfit>
                <Outfit
                  props={{
                    color: "#575A74",
                    fontSize: "16px",
                    fontWeight: 400,
                  }}
                >
                  User ID: #1234ABC
                </Outfit>
              </VStack>
            </HStack>
          </VStack>

          <VStack spacing="70px" align="flex-end">
            <HStack spacing="20px">
              <Flex
                justify="center"
                align="center"
                backgroundColor="#000"
                borderRadius="8px"
                height="48px"
                width="200px"
              >
                <Outfit
                  props={{
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: 400,
                  }}
                >
                  Documents
                </Outfit>
              </Flex>
              <Flex
                justify="center"
                align="center"
                backgroundColor="#F60F00"
                borderRadius="8px"
                height="48px"
                width="200px"
              >
                <Outfit
                  props={{
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: 400,
                  }}
                >
                  Block User
                </Outfit>
              </Flex>
            </HStack>

            <VStack spacing="1px" align="flex-end">
              <Outfit
                props={{
                  color: "#575A74",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
              >
                Helenkelly@gmail.com
              </Outfit>

              <Outfit
                props={{
                  color: "#575A74",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
              >
                +234-811-2345-678
              </Outfit>
              <Outfit
                props={{
                  color: "#575A74",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
              >
                DOB: 17, Aug, 1990
              </Outfit>
              <Outfit
                props={{
                  color: "#575A74",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
              >
                2, Rumueme, Port Harcourt
              </Outfit>
            </VStack>
          </VStack>
        </HStack>

        <HStack mt="30px" spacing='25px'>
          <Box
            width="178px"
            backgroundColor="#fff"
            borderRadius="15px"
            height="175px"
            boxShadow="0px 2px 20px 16px rgba(223, 220, 255, 0.3)"
            padding="15px"
          >
            <Outfit
              props={{
                color: black,
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              Driver’s Info
            </Outfit>

            <VStack pt="8px" align="flex-start" spacing="6px">
              <Outfit
                props={{
                  color: "#575A74",
                  fontWeight: 400,
                  fontSize: "12px",
                }}
              >
                Driver
              </Outfit>
              <Outfit
                props={{
                  color: "#575A74",
                  fontWeight: 400,
                  fontSize: "12px",
                }}
              >
                Damolaafolabi@gmail.com
              </Outfit>
              <Outfit
                props={{
                  color: "#575A74",
                  fontWeight: 400,
                  fontSize: "12px",
                }}
              >
                +234-811-2345-678
              </Outfit>
              <Outfit
                props={{
                  color: "#575A74",
                  fontWeight: 400,
                  fontSize: "12px",
                }}
              >
                DOB: 17, Aug, 1990
              </Outfit>
            </VStack>
          </Box>

          <Box
            width="220px"
            backgroundColor="#fff"
            borderRadius="15px"
            height="175px"
            boxShadow="0px 2px 20px 16px rgba(223, 220, 255, 0.3)"
            padding="15px"
          >
            <Outfit
              props={{
                color: black,
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              Account Details
            </Outfit>

            <VStack pt="8px" align="flex-start" spacing="6px">
              <HStack width="100%">
                <Outfit
                  props={{
                    color: "#000",
                    fontWeight: 600,
                    fontSize: "12px",
                  }}
                >
                  Account name:
                </Outfit>
                <Outfit
                  props={{
                    color: "#575A74",
                    fontWeight: 400,
                    fontSize: "12px",
                  }}
                >
                  Damola Afolabi
                </Outfit>
              </HStack>
              <HStack>
                <Outfit
                  props={{
                    color: "#000",
                    fontWeight: 600,
                    fontSize: "12px",
                  }}
                >
                  Bank Name:
                </Outfit>
                <Outfit
                  props={{
                    color: "#575A74",
                    fontWeight: 400,
                    fontSize: "12px",
                  }}
                >
                  First Bank
                </Outfit>
              </HStack>
              <HStack>
                <Outfit
                  props={{
                    color: "#000",
                    fontWeight: 600,
                    fontSize: "12px",
                  }}
                >
                  Account Number:
                </Outfit>
                <Outfit
                  props={{
                    color: "#575A74",
                    fontWeight: 400,
                    fontSize: "12px",
                  }}
                >
                  1234567890
                </Outfit>
              </HStack>
            </VStack>
          </Box>
        </HStack>

        <DriverTable />
      </Box>
    </Layout>
  );
};

export default DriverProfile;
