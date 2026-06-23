import Link from "next/link";
import { Heading, Text, Highlight, Flex, Button, Box } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

import MainLayout from "../components/layouts/main-layout";

export default function HomePage() {
  return (
    <MainLayout>
      <Flex
        w="full"
        minH="calc(100vh - 112px)"
        alignItems="center"
        justifyContent="center"
        px={{ base: 2, md: 4 }}
        py={{ base: 12, md: 16 }}
      >
        <Box
          w="min(760px, 100%)"
          px={{ base: 6, md: 12 }}
          py={{ base: 10, md: 14 }}
          border="1px solid"
          borderColor="whiteAlpha.200"
          rounded="32px"
          bg="rgba(18, 25, 31, .56)"
          backdropFilter="blur(22px) saturate(150%)"
          boxShadow="0 24px 80px rgba(0, 0, 0, .32)"
          textAlign="center"
        >
          <Text
            mb={4}
            color="primary.100"
            fontWeight="900"
            letterSpacing=".18em"
            textTransform="uppercase"
          >
            Eason MBTI Test
          </Text>
          <Heading
            as="h1"
            lineHeight="tall"
            textAlign="center"
            fontSize={{ base: "3xl", md: "5xl" }}
          >
            <Highlight
              query="MBTI"
              styles={{
                py: 1,
                px: 4,
                rounded: "full",
                bg: "rgba(159, 185, 201, .22)",
                color: "white",
              }}
            >
              参加 MBTI 性格测试
            </Highlight>
          </Heading>
          <Text
            mt={6}
            fontSize={{ base: "lg", md: "xl" }}
            color="whiteAlpha.800"
            align="center"
          >
            沿用 easonzhan.xyz 的雾蓝星辰背景，快速了解自己的性格倾向。
          </Text>
          <Link href="/test">
            <Button
              mt={10}
              w="max-content"
              colorScheme="primary"
              variant="solid"
              size="lg"
              rounded="18px"
              rightIcon={<FiArrowRight size={20} />}
            >
              开始测试
            </Button>
          </Link>
        </Box>
      </Flex>
    </MainLayout>
  );
}
