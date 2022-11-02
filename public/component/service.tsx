import { Box, Text, Flex, HStack, useTheme } from "@chakra-ui/react";
import { Outfit } from "./Text";
import ServiceCard from "./service-card";

const Services = () => {
  const theme = useTheme();
  const { black, white } = theme.colors.brand;

  return (
    <Box padding="15px">
      <HStack pb="15px" justify="space-between">
        <Outfit
          props={{
            color: black,
            fontWeight: 600,
            fontSize: "16px",
          }}
        >
          Frequently Used Services
        </Outfit>

        <Flex
          backgroundColor={black}
          width="77px"
          height="27px"
          align="center"
          justify="center"
          borderRadius="6px"
        >
          <Outfit
            props={{
              color: white,
              fontWeight: 600,
              fontSize: "12px",
            }}
          >
            January
          </Outfit>
        </Flex>
      </HStack>

      <HStack justify='space-between'>
        <ServiceCard type='COURIER' bgImage="/images/pngs/img.png" />
        <ServiceCard type='GROCERY' bgImage="/images/pngs/img2.png" />
        <ServiceCard type='CAR RENTALS' bgImage="/images/pngs/img3.png" />
      </HStack>
    </Box>
  );
};

export default Services;
