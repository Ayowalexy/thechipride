import { Box, Flex, VStack, Image, HStack } from "@chakra-ui/react";
import { Outfit } from "../../public/component/Text";
import Layout from "../../public/component/Layout";
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa';


const ComingSoon = () => {
  return (
    <Layout>
      <Flex align="center" justify="center" width="100%" height="100vh">
        <VStack>
          <Flex
            align="center"
            justify="center"
            width="70px"
            height="70px"
            border="2px solid #000"
            borderRadius="50%"
          >
            <Image src="/images/svg/car.svg" width='40px' />
          </Flex>

          <Outfit
            props={{
              color: "#000",
              fontWeight: 600,
              fontSize: "40px",
              pt: "30px",
            }}
          >
            WE&apos;RE COMING SOON
          </Outfit>

          <Box width="500px" border="1px solid #000" mt={"80px"} />

          <Outfit
            props={{
              color: "#000",
              fontWeight: 400,
              fontSize: "20px",
              pt: "30px",
              lineHeight: "20px",
            }}
          >
            We&apos;re coming soon. We&apos;re working <br />
            To give you the best of experience
          </Outfit>

          <VStack>
            <Outfit
              props={{
                color: "#000",
                fontWeight: 400,
                fontSize: "20px",
                pt: "100px",
                lineHeight: "20px",
              }}
            >
              Follow our social media platforms
            </Outfit>

            <HStack>
                <FaInstagram size={25} />
                <AiFillTwitterCircle size={25}  />
                <BsFacebook size={25} />
            </HStack>
          </VStack>
        </VStack>
      </Flex>
    </Layout>
  );
};

export default ComingSoon;
