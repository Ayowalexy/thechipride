import ProgressBar from "@ramonak/react-progress-bar";
import { HStack, Box } from "@chakra-ui/react";
import { Outfit } from "./Text";

const UserLocator = () => {
  return (
    <>
      {[
        {
          state: "Lagos",
          value: 500,
          percent:40,
        },
        {
          state: "Rivers",
          value: 500,
          percent: 70,
        },
        {
          state: "Abia",
          value: 500,
          percent: 30,
        },
        {
          state: "Abuja",
          value: 500,
          percent: 90,
        },
        {
          state: "Kano",
          value: 500,
          percent: 56,
        },
      ].map((element) => (
        <Box mt={'20px'} key={element.state}>
          <HStack justify='space-between' pb="10px">
            <Outfit
              props={{
                color: "#1A051D",
                fontWeight: 600,
                fontSize: "13px",
              }}
            >
              {element.state}
            </Outfit>
            <Outfit
              props={{
                color: "#575A74",
                fontWeight: 600,
                fontSize: "12px",
              }}
            >
              {element.value}
            </Outfit>
          </HStack>
          <ProgressBar
            customLabel=" "
            height="11px"
            bgColor="#6320EE"
            width="100%"
            completed={element.percent}
          />
        </Box>
      ))}
    </>
  );
};

export default UserLocator;
