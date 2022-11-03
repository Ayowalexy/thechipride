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
import UserTable from "../../public/component/userTable";
import Link from "next/link";

const UserProfile = () => {
  const theme = useTheme();
  const { black } = theme.colors.brand;

  return (
    <Layout>
      <Box padding="50px" width="100%" height="fit-content">
        <HStack width="100%" justify="space-between">
          <VStack align="flex-start" spacing="70px">
            <HStack spacing="10px">
              <Link href='/users'><BsArrowLeft /></Link>
              <Outfit
                props={{
                  color: black,
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                Tife Briggs
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
                  User
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

          <VStack spacing='70px' align='flex-end'>
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

            <VStack spacing='1px' align='flex-end'>
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

        <UserTable />
      </Box>
    </Layout>
  );
};

export default UserProfile;
