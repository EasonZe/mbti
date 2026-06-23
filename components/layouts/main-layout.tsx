import Head from "next/head";
import { ReactNode } from "react";
import { Flex, Box, useColorModeValue } from "@chakra-ui/react";

import Nav from "../common/nav";
import Footer from "../common/footer";
import EasonBackground from "../common/eason-background";

interface MainLayoutProps {
  children: ReactNode;
  hideBackground?: boolean;
}

export default function MainLayout(props: MainLayoutProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const pageBg = useColorModeValue("#eef5f8", "#091018");
  const pageColor = useColorModeValue("gray.800", "whiteAlpha.900");

  return (
    <>
      <Head>
        <title>MBTI 性格测试 | Eason</title>
        <meta
          name="description"
          content="Eason 的 MBTI 性格测试"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href={`${basePath}/favicon.ico`}
        />
      </Head>
      <Box
        w="full"
        minH="100vh"
        position="relative"
        overflow="hidden"
        bg={pageBg}
        color={pageColor}
      >
        <EasonBackground />
        <Box
          position="relative"
          zIndex={1}
          minH="100vh"
        >
          <Nav />
          <Flex
            as="main"
            w="100%"
            minH="calc(100vh - 80px)"
            justifyContent="center"
            alignItems="center"
            position="relative"
            px={{ base: 3, md: 6 }}
          >
            {props.children}
          </Flex>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
