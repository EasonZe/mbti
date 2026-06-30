/* 中文标注：Zustand 答题状态仓库，保存当前测试过程中的用户答案。 */
import create from "zustand";

import { TestAnswerOption } from "../lib/personality-test";

interface UserTestAnswersState {
  userTestAnswers: TestAnswerOption["type"][];
  setUserTestAnswers: (newUserTestAnswers: TestAnswerOption["type"][]) => void;
}

const useUserTestAnswersStore = create<UserTestAnswersState>((set) => ({
  userTestAnswers: [],
  setUserTestAnswers: (newUserTestAnswers) =>
    set(() => ({
      userTestAnswers: newUserTestAnswers,
    })),
}));

export default useUserTestAnswersStore;
