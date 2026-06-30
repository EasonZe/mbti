/* 中文标注：测试历史组件，从本地 IndexedDB 读取并显示历史测试记录。 */
import Link from "next/link";
import { Flex, Heading, Text, Button, useColorModeValue } from "@chakra-ui/react";
import dayjs from "dayjs";
import { FiArrowLeft, FiChevronRight } from "react-icons/fi";

import { TestResult } from "../../lib/personality-test";

interface TestResultHistoryProps {
  testResults: TestResult[];
}

export default function TestResultHistory(props: TestResultHistoryProps) {
  const cardBg = useColorModeValue("rgba(255, 255, 255, .72)", "rgba(18, 25, 31, .62)");
  const cardColor = useColorModeValue("#17232c", "#f4f9fb");
  const borderColor = useColorModeValue("rgba(86, 119, 137, .18)", "rgba(255, 255, 255, .18)");
  const itemBg = useColorModeValue("rgba(255,255,255,.62)", "rgba(255,255,255,0.08)");
  const itemHoverBg = useColorModeValue("#D8E6F8", "rgba(216,230,248,.18)");

  return (
    <Flex
      my={4}
      w={{ base: "full", lg: "50%" }}
      maxW={{ base: "100%", md: "820px" }}
      h="full"
      px={{ base: 5, md: 8 }}
      py={8}
      gap={8}
      alignSelf="flex-start"
      alignItems="center"
      direction="column"
      border="1px solid"
      borderColor={borderColor}
      rounded="28px"
      bg={cardBg}
      color={cardColor}
      backdropFilter="blur(22px) saturate(150%)"
      boxShadow="0 24px 80px rgba(0, 0, 0, .2)"
    >
      <Flex w="full" alignItems="center" justifyContent="space-between" gap={{ base: 2, md: 4 }}>
        <Button
          as={Link}
          href="/"
          colorScheme="primary"
          leftIcon={<FiArrowLeft />}
          size={{ base: "sm", md: "md" }}
          px={{ base: 3, md: 4 }}
          minW={{ base: "auto", md: "92px" }}
        >
          <Text display={{ base: "none", sm: "inline" }}>返回</Text>
        </Button>
        <Heading
          as="h1"
          textAlign="center"
          flex="1"
          fontSize={{ base: "3xl", md: "5xl" }}
          lineHeight="1.2"
          whiteSpace="nowrap"
        >
          测试历史
        </Heading>
        <Flex w={{ base: "44px", sm: "72px", md: "92px" }} />
      </Flex>
      <Flex w="full" gap={4} direction="column">
        {props.testResults.map((testResult) => (
          <Flex
            key={testResult.timestamp}
            as={Link}
            href={`/test/result/?testResultId=${testResult.timestamp}`}
            py={{ base: 3, md: 4 }}
            px={{ base: 4, md: 5 }}
            w="full"
            rounded="18px"
            cursor="pointer"
            alignItems="center"
            justifyContent="space-between"
            borderWidth={1}
            borderColor="rgba(255,255,255,0.15)"
            bg={itemBg}
            color={cardColor}
            _hover={{ bg: itemHoverBg, transform: "translateY(-1px)" }}
          >
            <Text fontWeight="700" fontSize={{ base: "md", md: "xl" }}>
              {dayjs(testResult.timestamp).format("YYYY年MM月DD日 HH:mm ")}
            </Text>
            <FiChevronRight />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
