import { Box, Flex, Text, Image, useTheme, HStack, InputGroup, Input, InputLeftElement, Avatar, VStack } from "@chakra-ui/react";
import { CiSearch } from 'react-icons/ci'
import { FaBell } from 'react-icons/fa'
import { Outfit } from "./Text";

const Header = () => {
  const theme = useTheme();
  const { white, bg3, black, bg1, placeholder } = theme.colors.brand;
  return (
    <Flex
        align='center'
        justify='space-between'
        backgroundColor={white}
        height='78px'
        width='100%'
        pos='fixed'
        zIndex={10}
        padding='50px 60px'
    >
      <HStack spacing={6}>
        <Image src={"/images/svg/logo.svg"} width="200px" />
        <InputGroup>
        <InputLeftElement 
            children={<CiSearch />}
        />
        <Input
            placeholder="Search services etc"
            backgroundColor={bg3}
            width='405px'
            height='38px'
            fontFamily='Outfit'
            fontStyle='normal'
            fontWeight={400}
            fontSize='12px'
        />
        </InputGroup>
      </HStack>

     <HStack spacing={4}>
        <FaBell size={20} />
        <Avatar size='md' name='Ryan Florence' src='https://bit.ly/ryan-florence' />{' '}
        <VStack align='flex-start' spacing={'4px'}>
            <Outfit props={{color: black, fontSize: '16px'}}>
                Ike John Dow
            </Outfit>
            <Outfit props={{color: placeholder, fontSize: '14px', fontWeight: 400, pt:'-15px'}}>
               Admin
            </Outfit>
        </VStack>
     </HStack>
    </Flex>
  );
};

export default Header