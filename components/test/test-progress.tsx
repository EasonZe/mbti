/* 中文标注：测试进度组件，显示当前已完成题目数量和整体进度。 */
import { Progress } from "@chakra-ui/react";

import { personalityTest } from "../../data/personality-test";
import useUserTestAnswersStore from "../../store/use-user-test-answers";

export default function TestProgress() {
  const { userTestAnswers } = useUserTestAnswersStore();

  const progress = (userTestAnswers.length / personalityTest.length) * 100;

  return (
    <Progress
      w="full"
      size="lg"
      rounded="md"
      colorScheme="primary"
      value={progress}
    />
  );
}
