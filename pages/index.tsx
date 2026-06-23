import Link from "next/link";
import {
  Heading,
  Text,
  Highlight,
  Flex,
  Button,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

import MainLayout from "../components/layouts/main-layout";

export default function HomePage() {
  const cardBg = useColorModeValue("rgba(255, 255, 255, .72)", "rgba(18, 25, 31, .56)");
  const cardBorder = useColorModeValue("blackAlpha.100", "whiteAlpha.200");
  const headingColor = useColorModeValue("gray.900", "white");
  const labelColor = useColorModeValue("primary.700", "primary.100");
  const highlightBg = useColorModeValue("rgba(201, 219, 230, .42)", "rgba(159, 185, 201, .22)");
  const highlightColor = useColorModeValue("primary.900", "white");

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
          borderColor={cardBorder}
          rounded="32px"
          bg={cardBg}
          color={headingColor}
          backdropFilter="blur(22px) saturate(150%)"
          boxShadow="0 24px 80px rgba(0, 0, 0, .18)"
          textAlign="center"
        >
          <Text
            mb={4}
            color={labelColor}
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
                bg: highlightBg,
                color: highlightColor,
              }}
            >
              参加 MBTI 性格测试
            </Highlight>
          </Heading>
          <Link href="/test">
            <Button
              mt={10}
              w="max-content"
              colorScheme="primary"
              color="white"
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
