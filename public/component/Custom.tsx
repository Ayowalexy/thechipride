import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface flexProps {
    children: ReactNode
}

export const IBox = ({children}: flexProps) => (
  <Flex
    width="76px"
    height="56px"
    borderRadius="14px"
    backgroundColor="#fff"
    justify="center"
    cursor="pointer"
    transition="ease all 400ms"
    align="center"
    boxShadow="0px 4px 20px -10px rgba(16, 24, 40, 0.1), 
                  20px 8px 20px -2px rgba(16, 24, 40, 0.06)"
  >
    {children}
  </Flex>
);
