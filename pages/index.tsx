/* 中文标注：首页页面，展示主视觉卡片、开始测试按钮、鸣谢和来源信息。 */
import Link from "next/link";
import { Heading, Text, Highlight, Flex, Button, Box, Link as ChakraLink, useColorModeValue } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

import MainLayout from "../components/layouts/main-layout";
import { withBasePath } from "../lib/asset-path";

// 中文标注：首页主组件。
export default function HomePage() {
  const cardBg = useColorModeValue("rgba(255, 255, 255, .76)", "rgba(18, 25, 31, .62)");
  const cardImage = withBasePath("/images/home-bottom.png");
  // 中文标注：首页卡片背景图，深浅色分别叠加不同透明度遮罩。
  const cardBackground = useColorModeValue(
    `linear-gradient(180deg, rgba(255,255,255,.70), rgba(239,247,252,.56)), url(${cardImage})`,
    `linear-gradient(180deg, rgba(9,16,24,.44), rgba(9,16,24,.30)), url(${cardImage})`
  );
  const borderColor = useColorModeValue("rgba(86, 119, 137, .18)", "whiteAlpha.200");
  const textColor = useColorModeValue("#314a59", "whiteAlpha.800");
  const highlightBg = useColorModeValue("rgba(159, 185, 201, .2)", "rgba(159, 185, 201, .22)");
  const highlightColor = useColorModeValue("#17232c", "white");
  const linkColor = useColorModeValue("#5F83AE", "#D8E6F8");

  return (
    <MainLayout>
      <Flex
        w="full"
        minH={{ base: "calc(100vh - 120px)", md: "calc(100vh - 130px)" }}
        alignItems="center"
        justifyContent="center"
        px={{ base: 2, md: 4 }}
        py={{ base: 2, md: 3 }}
      >
        <Box
          w="min(820px, 100%)"
          minH={{ base: "360px", md: "540px" }}
          px={{ base: 5, md: 9 }}
          py={{ base: 6, md: 10 }}
          border="1px solid"
          borderColor={borderColor}
          rounded="32px"
          bg={cardBg}
          backdropFilter="blur(22px) saturate(150%)"
          boxShadow="0 24px 80px rgba(0, 0, 0, .2)"
          textAlign="center"
          position="relative"
          overflow="hidden"
          isolation="isolate"
        >
          <Box
            position="absolute"
            inset={0}
            zIndex={0}
            bgImage={cardBackground}
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center center"
            transform="scale(1.0)"
          />
          <Box
            position="absolute"
            inset={0}
            zIndex={0}
            bg={useColorModeValue("rgba(255,255,255,.26)", "rgba(5,10,16,.16)")}
          />
          <Box position="relative" zIndex={1}>
          <Heading
            as="h1"
            lineHeight="tall"
            textAlign="center"
            fontSize={{ base: "3xl", md: "4xl" }}
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
          <Text
            mt={4}
            fontSize={{ base: "md", md: "lg" }}
            color={textColor}
            align="center"
          >
            快速了解自己的性格倾向。
          </Text>
          <Link href="/test">
            <Button
              mt={6}
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

          {/* 中文标注：免费声明、鸣谢、作者和来源区域。 */}
          <Box
            mt={5}
            px={{ base: 3, md: 4 }}
            py={{ base: 3, md: 4 }}
            rounded="22px"
            bg={useColorModeValue("rgba(255,255,255,.44)", "rgba(7,12,18,.42)")}
            border="1px solid"
            borderColor={borderColor}
            backdropFilter="blur(12px)"
          >
            <Text
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="800"
              lineHeight={{ base: "1.7", md: "1.6" }}
              textAlign="center"
              wordBreak="keep-all"
              color={useColorModeValue("#1e3550", "#F4F9FB")}
              mb={3}
            >
              本站为完全免费测试，不收取任何费用。
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }} color={textColor} mb={2} lineHeight="1.7">
              鸣谢
              <ChakraLink href="https://github.com/vsme" target="_blank" rel="noopener noreferrer" color={linkColor} fontWeight="700" ml={1} mr={1}>
                Yawei Sun
              </ChakraLink>
              <ChakraLink href="https://github.com/rauf-21" target="_blank" rel="noopener noreferrer" color={linkColor} fontWeight="700" ml={1}>
                rauf
              </ChakraLink>
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }} color={textColor} mb={2} lineHeight="1.7">
              本站作者
              <ChakraLink href="https://github.com/EasonZe" target="_blank" rel="noopener noreferrer" color={linkColor} fontWeight="700" ml={1}>
                Eason
              </ChakraLink>
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }} color={textColor}>
              本站测试都基于此
              <ChakraLink href={withBasePath("/MBTI-personality-test.pdf")} target="_blank" rel="noopener noreferrer" color={linkColor} fontWeight="700" ml={1}>
                来源
              </ChakraLink>
            </Text>
          </Box>
          </Box>
        </Box>
      </Flex>
    </MainLayout>
  );
}
