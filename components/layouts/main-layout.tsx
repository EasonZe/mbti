import Head from "next/head";
import { ReactNode } from "react";
import { Flex, Box, useColorModeValue } from "@chakra-ui/react";

import Nav from "../common/nav";
import Footer from "../common/footer";
import EasonBackground from "../common/eason-background";
import { withBasePath } from "../../lib/asset-path";

interface MainLayoutProps {
  children: ReactNode;
  hideBackground?: boolean;
  lockViewport?: boolean;
  hideFooter?: boolean;
}

export default function MainLayout(props: MainLayoutProps) {
  const pageBg = useColorModeValue("#edf6fb", "#091018");
  const pageColor = useColorModeValue("#17232c", "whiteAlpha.900");

  return (
    <>
      <Head>
        <title>MBTI 性格测试 | Eason</title>
        <meta name="description" content="Eason 的 MBTI 性格测试" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={withBasePath("/favicon.ico")} />
      </Head>
      <Box
        w="full"
        minH="100vh"
        position="relative"
        bg={pageBg}
        color={pageColor}
      >
        {!props.hideBackground && <EasonBackground />}
        <Box
          position="relative"
          zIndex={1}
          minH="100vh"
          display="flex"
          flexDirection="column"
        >
          <Nav />
          <Flex
            as="main"
            w="100%"
            flex="1"
            justifyContent="center"
            alignItems={props.lockViewport ? { base: "center", lg: "stretch" } : "center"}
            position="relative"
            px={{ base: 3, md: 6 }}
            pt={{ base: "94px", md: "102px" }}
            pb={{ base: 4, md: 5 }}
            overflow={props.lockViewport ? { base: "visible", lg: "hidden" } : "visible"}
          >
            {props.children}
          </Flex>
          {!props.hideFooter && <Footer />}
        </Box>
      </Box>
    </>
  );
}
