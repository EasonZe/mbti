/* 中文标注：结果页左侧分数统计组件，展示 E/I/S/N/T/F/J/P 各维度得分。 */
import { Flex, Text, Heading, useColorModeValue } from "@chakra-ui/react";

import { personalityClasses } from "../../data/personality-classes";
import { PersonalityClass, TestResult } from "../../lib/personality-test";

interface TestResultStatsProps {
  testResult: TestResult;
}

function ScoreStats(props: {
  testScores: PersonalityClass["type"][];
  targetScore: PersonalityClass["type"];
}) {
  const testScoresFiltered = props.testScores.filter(
    (score) => score === props.targetScore
  );

  return (
    <Flex
      py={1}
      px={2}
      gap={2}
      rounded="md"
      justifyContent="space-between"
      bg="rgba(255,255,255,.86)"
      color="#17232c"
    >
      <Text fontWeight="900">
        {((testScoresFiltered.length / props.testScores.length) * 100)
          .toFixed(2)
          .replace(/[.,]0+$/, "")}
        %
      </Text>
      <Text>({testScoresFiltered.length})</Text>
    </Flex>
  );
}

export default function TestResultStats(props: TestResultStatsProps) {
  const cardBg = useColorModeValue("rgba(255, 255, 255, .72)", "rgba(18, 25, 31, .62)");
  const cardColor = useColorModeValue("#17232c", "#f4f9fb");
  const borderColor = useColorModeValue("rgba(86, 119, 137, .18)", "rgba(255, 255, 255, .18)");
  const statsColorScheme = [
    "red",
    "blue",
    "yellow",
    "purple",
    "orange",
    "green",
    "pink",
    "teal",
  ];

  return (
    <Flex
      my={{ base: 4, lg: 0 }}
      mx={{ base: 0, lg: 4 }}
      w={{ base: "full", lg: "300px" }}
      h="min-content"
      maxH={{ base: "none", lg: "calc(100vh - 132px)" }}
      p={4}
      gap={4}
      border="1px solid"
      borderColor={borderColor}
      rounded="24px"
      bg={cardBg}
      color={cardColor}
      backdropFilter="blur(22px) saturate(150%)"
      boxShadow="0 24px 80px rgba(0, 0, 0, .2)"
      direction="column"
      alignSelf={{ base: "stretch", lg: "flex-start" }}
      flexShrink={0}
      overflow="hidden"
    >
      <Heading as="h1" textAlign="center" fontSize="lg">
        分数
      </Heading>
      {personalityClasses.map((personalityClass, index) => (
        <Flex
          key={index}
          p={2}
          rounded="md"
          justifyContent="space-between"
          alignItems="center"
          bg={`${statsColorScheme[index]}.500`}
        >
          <Text fontWeight="900" color="white">
            {personalityClass.description}
          </Text>
          <ScoreStats
            testScores={props.testResult.testScores}
            targetScore={personalityClass.type}
          />
        </Flex>
      ))}
    </Flex>
  );
}
