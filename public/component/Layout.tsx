import { Box, Flex, useTheme } from "@chakra-ui/react";
import Header from "./header";
import { ReactNode } from "react";
import SideBar from "./sideBar";

interface layoutProps {
  children: ReactNode;
}

const Layout = ({ children }: layoutProps): JSX.Element => {
  const theme = useTheme();
  const { bg3 } = theme.colors.brand;
  return (
    <>
      <Header />
      <Flex width="100%">
        <Box width="15%">
          <SideBar />
        </Box>
        <Box
          backgroundColor={bg3}
          height={'fit-content'}
          marginTop="80px"
          width='100%'
        //   flexGrow={}
        >
          {children}
        </Box>
      </Flex>
    </>
  );
};

export default Layout;
