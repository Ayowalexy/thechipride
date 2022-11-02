import {
  Box,
  Text,
  Flex,
  useTheme,
  HStack,
  Select,
  VStack,
} from "@chakra-ui/react";
import { Outfit, Sora } from "../../public/component/Text";
import Layout from "../../public/component/Layout";
import { IoIosArrowDown } from "react-icons/io";
import { MotionFlex } from "../../public/motion";
import UserCard from "../../public/component/userCard";
import { users } from "../../public/component/data";
import { useState, useEffect, ChangeEvent } from "react";
import { userProps } from "../../public/component/types";
import UnapprovedUserCard from "../../public/component/unapprovedusercard";

const Users = () => {
  const theme = useTheme();
  const [data, setData] = useState<userProps[]>(users);
  const [type, setType] = useState<string>("");
  const { black, white } = theme.colors.brand;

  const filterFunction = (element: string) => {
    const res = users.filter(user => user.type === element)
    setData(res)
  }

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e?.target.value;
    setType(value);
    filterFunction(value);
  }


  useEffect(() => {
    filterFunction('User')
  }, [])

  return (
    <Layout>
      <Box padding="40px 30px" width="100%">
        <Outfit
          props={{
            fontSize: "18px",
            color: black,
            fontWeight: 600,
          }}
        >
          All Users
        </Outfit>

        <HStack
          mt="30px"
          align="flex-end"
          justify="space-between"
          width="100%"
          boxShadow="0px 2px 20px 16px #DFDCFF"
          borderRadius="15px"
          padding="15px"
          backgroundColor={white}
        >
          <VStack align="flex-start" width="25%">
            <Outfit props={{ color: black, fontWeight: 600, fontSize: "16px" }}>
              User Type
            </Outfit>
            <Select
              borderWidth="1.5"
              color="#575A74"
              fontSize="16px"
              fontWeight={400}
              fontFamily="Outfit"
              borderRadius="8px"
              height="48px"
              icon={<IoIosArrowDown />}
              onChange={handleChange}
              placeholder="Select User type"
            >
              <option value="User">Client</option>
              <option value="Driver">Driver</option>
              <option value="Lister">Lister</option>

            </Select>
          </VStack>

          <VStack align="flex-start" width="25%">
            <Outfit props={{ color: black, fontWeight: 600, fontSize: "16px" }}>
              Location
            </Outfit>
            <Select
              borderWidth="1.5"
              color="#575A74"
              fontSize="16px"
              fontWeight={400}
              fontFamily="Outfit"
              borderRadius="8px"
              height="48px"
              icon={<IoIosArrowDown />}
              placeholder="Select User type"
            >
              <option value="Client">Port Harcourt</option>
              <option value="Driver">Lagos</option>
            </Select>
          </VStack>

          <VStack align="flex-start" width="25%">
            <Outfit props={{ color: black, fontWeight: 600, fontSize: "16px" }}>
              Sort By
            </Outfit>
            <Select
              borderWidth="1.5"
              color="#575A74"
              fontSize="16px"
              fontWeight={400}
              fontFamily="Outfit"
              borderRadius="8px"
              height="48px"
              icon={<IoIosArrowDown />}
              placeholder="Select User type"
            >
              <option value="Client">Recently Joined</option>
              <option value="Driver">Last Joined</option>
            </Select>
          </VStack>

          <MotionFlex
            width="20%"
            borderRadius="8px"
            backgroundColor={black}
            height="48px"
            align="center"
            justify="center"
          >
            <Outfit
              props={{
                color: white,
                fontWeight: 400,
                fontSize: "14px",
              }}
            >
              Apply filter
            </Outfit>
          </MotionFlex>
        </HStack>

        <Flex
            align='center'
            justify='center'
            width={"100%"}
        >
          <Flex
            width={"100%"}
            flexWrap="wrap"
            align="center"
            justify="space-between"
            // pt={"40px"}
          >
            {
                data.map((element, idx) => (
                    <>
                        {
                            type === 'Lister'
                            ? <UnapprovedUserCard key={idx} data={element} />
                            :  <UserCard key={idx} data={element} />
                        }
                    </>
                ))
            }
            
          </Flex>
        </Flex>
      </Box>
    </Layout>
  );
};

export default Users;
