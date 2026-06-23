import Link from "next/link";
import { Flex, Heading, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import { FiChevronRight } from "react-icons/fi";

import { TestResult } from "../../lib/personality-test";

interface TestResultHistoryProps {
  testResults: TestResult[];
}

export default function TestResultHistory(props: TestResultHistoryProps) {
  return (
    <Flex
      my={4}
      w={{
        base: "full",
        lg: "50%",
      }}
      h="full"
      px={{ base: 5, md: 8 }}
      py={8}
      gap={8}
      alignSelf="flex-start"
      alignItems="center"
      direction="column"
      border="1px solid"
      borderColor="whiteAlpha.200"
      rounded="28px"
      bg="rgba(18, 25, 31, .62)"
      color="whiteAlpha.900"
      backdropFilter="blur(22px) saturate(150%)"
      boxShadow="0 24px 80px rgba(0, 0, 0, .32)"
    >
      <Heading
        as="h1"
        textAlign="center"
      >
        测试历史
      </Heading>
      <Flex
        w="full"
        gap={4}
        direction="column"
      >
        {props.testResults.map((testResult) => (
          <Flex
            key={testResult.timestamp}
            as={Link}
            href={`/test/result/?testResultId=${testResult.timestamp}`}
            py={2}
            px={4}
            w="full"
            rounded="18px"
            cursor="pointer"
            alignItems="center"
            justifyContent="space-between"
            borderWidth={1}
            borderColor="whiteAlpha.200"
            bg="whiteAlpha.100"
            _hover={{
              bg: "whiteAlpha.200",
              transform: "translateY(-1px)",
            }}
          >
            <Text>
              {dayjs(testResult.timestamp).format("YYYY年MM月DD日 HH:mm ")}
            </Text>
            <FiChevronRight />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
