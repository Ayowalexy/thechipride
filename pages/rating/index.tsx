import { Box, Select, Flex, VStack, HStack, useTheme } from "@chakra-ui/react";
import { Outfit } from "../../public/component/Text";
import { MotionFlex } from "../../public/motion";
import Layout from "../../public/component/Layout";
import { IoIosArrowDown } from "react-icons/io";
import RatingTable from "../../public/component/ratingTable";

const Ratings = () => {
  const theme = useTheme();
  const { black, white } = theme.colors.brand;
  return (
    <Layout>
      <Box height="fit-content" padding="30px">
        <Outfit
          props={{
            fontSize: "18px",
            color: black,
            fontWeight: 600,
          }}
        >
          Ratings
        </Outfit>

        <HStack
          mt="30px"
          align="flex-end"
          justify="space-between"
          width="100%"
          boxShadow="0px 2px 20px 16px rgba(223, 220, 255, 0.3)"
          borderRadius="15px"
          padding="15px"
          backgroundColor={white}
        >
          <VStack align="flex-start" width="40%">
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
              placeholder="Select Location"
            >
              <option value="User">All location</option>
              <option value="Driver">Lagos</option>
              <option value="Lister">Port Harcourt</option>
            </Select>
          </VStack>

          <VStack align="flex-start" width="40%">
            <Outfit props={{ color: black, fontWeight: 600, fontSize: "16px" }}>
              Sort by
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
              placeholder="Select type"
            >
              <option value="Client">Recently Joined</option>
              <option value="Driver">Last Joined</option>
            </Select>
          </VStack>

          <MotionFlex
            width="20%"
            borderRadius="8px"
            backgroundColor={'#5446FD'}
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

        <RatingTable />
      </Box>
    </Layout>
  );
};

export default Ratings;
