import {
  Text,
  Box,
  Flex,
  useTheme,
  HStack,
  ListItem,
  ListIcon,
  List,
  Divider,
} from "@chakra-ui/react";
import { MotionBox } from "../motion";
import { Outfit, Sora } from "./Text";
import { Navigation } from "./navigation";
import { useState } from "react";
import { useNavigation } from "../context/navigationContext";
import { useRouter } from "next/router";

const SideBar = () => {
  const theme = useTheme();
  const { active, setActive } = useNavigation();
  const router = useRouter();
  const { black, white, inactiveText } = theme.colors.brand;
  return (
    <Flex
      height="100vh"
      justify="center"
      align="flex-start"
      width="200px"
      position="fixed"
      backgroundColor={black}
    >
      <List pt={"140px"} spacing={5}>
        {Navigation.map((element, idx) => (
          <ListItem
            color={white}
            height="56px"
            borderLeft={`2px solid ${
              active === element.title ? "#fff" : "#000"
            }`}
            width="200px"
            backgroundColor={`${
              active === element.title ? "rgba(159, 162, 180, 0.3)" : "#000"
            }`}
            cursor="pointer"
            fontFamily="Outfit"
            transition="all ease 500ms"
            padding="14px 13px"
            key={idx}
            onClick={() => {
                setActive(element.title)
                router.push(element.path)
            }}
          >
            {element.title === "Divider" ? (
              <Divider pt={"20px"} color={inactiveText} />
            ) : (
              <HStack>
                <ListIcon 
                    w={25} 
                    h={25} 
                    as={element.icon} 
                    color={element.title === active ? white : inactiveText} 
                />
                <Outfit
                  props={{
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "20px",
                    letterSpacing: "0.2px",
                    color: `${element.title === active ? white : inactiveText}`
                  }}
                >
                  {element.title}
                </Outfit>
              </HStack>
            )}
          </ListItem>
        ))}
      </List>
    </Flex>
  );
};

export default SideBar;
