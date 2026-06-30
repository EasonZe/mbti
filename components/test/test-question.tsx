/* 中文标注：核心答题组件，负责题目切换、保存答案、计算并跳转结果页。 */
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useRadioGroup, Flex, Text, Button, useColorModeValue } from "@chakra-ui/react";

import TestProgress from "./test-progress";
import TestAnswerOption from "./test-answer-option";

import { personalityTest } from "../../data/personality-test";
import {
  TestAnswerOption as TestAnswer,
  getQuestionAnswerScore,
  saveTestResult,
} from "../../lib/personality-test";
import useUserTestAnswersStore from "../../store/use-user-test-answers";

// 中文标注：显示当前题目，并根据用户选择记录答案。
export default function TestQuestion() {
  const router = useRouter();
  const secondaryButtonBg = useColorModeValue("rgba(255,255,255,.62)", "rgba(255,255,255,0.08)");
  const secondaryButtonColor = useColorModeValue("#17232c", "#f4f9fb");
  const secondaryHoverBg = useColorModeValue("#D8E6F8", "rgba(216,230,248,.18)");

  const { userTestAnswers, setUserTestAnswers } = useUserTestAnswersStore();

  const [currentPersonalityTestIndex, setCurrentPersonalityTestIndex] =
    useState(0);

  const isUserAlreadyPickAnswer =
    userTestAnswers[currentPersonalityTestIndex] !== undefined;

  const { getRootProps, getRadioProps, setValue } = useRadioGroup({
    name: "answer",
    defaultValue: userTestAnswers[currentPersonalityTestIndex],
    onChange: (value) => {
      const newUserTestAnswers = [...userTestAnswers];

      newUserTestAnswers[currentPersonalityTestIndex] =
        value as TestAnswer["type"];

      setUserTestAnswers(newUserTestAnswers);

      handleNextButtonClick();
    },
  });

  const group = getRootProps();

  useEffect(() => {
    if (userTestAnswers[currentPersonalityTestIndex] === undefined) {
      setValue("");
      return;
    }

    setValue(userTestAnswers[currentPersonalityTestIndex]);
  }, [currentPersonalityTestIndex, userTestAnswers, setValue]);

  function handleNextButtonClick() {
    setCurrentPersonalityTestIndex((currentPersonalityTestIndex) => {
      if (currentPersonalityTestIndex + 1 > personalityTest.length - 1) {
        return currentPersonalityTestIndex;
      }

      return currentPersonalityTestIndex + 1;
    });
  }

  function handlePreviousButtonClick() {
    setCurrentPersonalityTestIndex((currentPersonalityTestIndex) => {
      if (currentPersonalityTestIndex - 1 < 0) {
        return currentPersonalityTestIndex;
      }

      return currentPersonalityTestIndex - 1;
    });
  }

  function handleSeeResultButtonClick() {
    const timestamp = Date.now();
    const testScores = userTestAnswers.map((answer, index) =>
      getQuestionAnswerScore(index + 1, answer)
    );

    saveTestResult({
      testAnswers: userTestAnswers,
      testScores,
      timestamp,
    })
      .tap(() => {
        setUserTestAnswers([]);
      })
      .tapOk((id) => {
        router.replace(`/test/result/?testResultId=${id}`);
      })
      .tapError((error) => {
        console.error(error);
      });
  }

  return (
    <Flex
      py={4}
      w="full"
      h="full"
      gap={8}
      direction="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <TestProgress />
      <Flex direction="column" gap={3}>
        <Text fontWeight="900" align="center" opacity={0.72}>
          #{currentPersonalityTestIndex + 1}
        </Text>
        <Text fontSize="lg" align="center" fontWeight="700">
          {personalityTest[currentPersonalityTestIndex].question}
        </Text>
      </Flex>
      <Flex w="full" gap={4} direction="column" {...group}>
        {personalityTest[currentPersonalityTestIndex].answerOptions.map(
          (answerOption) => {
            const radio = getRadioProps({ value: answerOption.type });

            return (
              <TestAnswerOption key={answerOption.type} {...radio}>
                {answerOption.answer}
              </TestAnswerOption>
            );
          }
        )}
      </Flex>
      <Flex direction="row" w="full" gap={4}>
        <Button
          w="full"
          variant="solid"
          rounded="18px"
          bg={secondaryButtonBg}
          color={secondaryButtonColor}
          border="1px solid rgba(255,255,255,0.15)"
          boxShadow="0 10px 24px rgba(143,175,214,.12)"
          _hover={{ bg: secondaryHoverBg }}
          _disabled={{
            opacity: .56,
            color: secondaryButtonColor,
            bg: secondaryButtonBg,
            cursor: "not-allowed",
            boxShadow: "none",
          }}
          {...(currentPersonalityTestIndex === 0 && { disabled: true })}
          onClick={handlePreviousButtonClick}
        >
          上一题
        </Button>
        {isUserAlreadyPickAnswer &&
        currentPersonalityTestIndex === personalityTest.length - 1 ? (
          <Button w="full" colorScheme="primary" onClick={handleSeeResultButtonClick}>
            查看结果
          </Button>
        ) : (
          <Button
            w="full"
            colorScheme="primary"
            variant="solid"
            {...(!isUserAlreadyPickAnswer && { disabled: true })}
            onClick={handleNextButtonClick}
          >
            下一题
          </Button>
        )}
      </Flex>
    </Flex>
  );
}
