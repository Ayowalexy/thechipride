import { Box, Text, Flex, useTheme, HStack } from "@chakra-ui/react";
import { MotionBox } from "../../public/motion";
import { Outfit, Sora } from "../../public/component/Text";
import Layout from "../../public/component/Layout";
import Chart from "../../public/component/chart";
import BixialChart from "../../public/component/BixialChart";
import Card from "../../public/component/Card";
import UserLocator from "../../public/component/locator";
import Services from "../../public/component/service";

const Dashboard = () => {
  const theme = useTheme();
  const { black, white } = theme.colors.brand;
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
          Overview
        </Outfit>

        <HStack width="100%" justify="space-between" pt={"30px"}>
          <Card title="Total Users" value="684" color="#6320EE" />
          <Card title="Total Drivers" value="684" color="#FFC701" />
          <Card title="Total Rides" value="5,732" color="#05C38A" />
          <Card title="Total Amount" value="$200,000" color="#D22159" />
        </HStack>

        <HStack width="100%" justify="space-between" pt={"30px"}>
          <MotionBox
            height="238px"
            background={white}
            boxShadow="0px 2px 20px 35px #DFDCFF"
            borderRadius="15px"
            width="48%"
            padding="15px"
          >
            <HStack justify="space-between">
              <Outfit
                props={{
                  color: black,
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                Total Revenue
              </Outfit>

              <Outfit
                props={{
                  color: black,
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                $200,000
              </Outfit>
            </HStack>
            <Chart />
          </MotionBox>

          <MotionBox
            height="238px"
            background={white}
            boxShadow="0px 2px 20px 35px #DFDCFF"
            borderRadius="15px"
            width="48%"
            padding="15px"
          >
            <Outfit
              props={{
                color: black,
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              User Insights
            </Outfit>
            <BixialChart />
          </MotionBox>
        </HStack>

        <HStack width="100%" justify="space-between" pt={"30px"}>
          <MotionBox
            height="376px"
            background={white}
            boxShadow="0px 2px 20px 30px #DFDCFF"
            borderRadius="15px"
            width="26%"
            padding="15px"
          >
            <Outfit
              props={{
                color: black,
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              Users Locator
            </Outfit>
            <UserLocator />
          </MotionBox>

          <MotionBox
            height="376px"
            background={white}
            boxShadow="0px 2px 20px 30px #DFDCFF"
            borderRadius="15px"
            width="69%"
          >
            <Services />
          </MotionBox>
        </HStack>
      </Box>
    </Layout>
  );
};

export default Dashboard;
