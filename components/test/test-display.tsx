/* 中文标注：测试页外层组件，控制说明面板和正式题目区域的显示。 */
import { useState } from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";

import TestMenu from "./test-menu";
import TestInstructions from "./test-instructions";
import TestQuestion from "./test-question";

export default function TestDisplay() {
  const [showTestInstructions, setShowTestInstructions] = useState(true);
  const cardBg = useColorModeValue("rgba(255, 255, 255, .72)", "rgba(18, 25, 31, .58)");
  const cardColor = useColorModeValue("#17232c", "#f4f9fb");
  const borderColor = useColorModeValue("rgba(86, 119, 137, .18)", "rgba(255, 255, 255, .18)");

  function handleShowInstructionsButtonClick() {
    setShowTestInstructions(true);
  }

  function handleCloseTestInstructions() {
    setShowTestInstructions(false);
  }

  return (
    <Flex
      alignSelf="flex-start"
      w="full"
      h="full"
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={3}
      px={1}
      py={2}
    >
      <TestMenu
        onShowInstructionsButtonClick={handleShowInstructionsButtonClick}
      />
      <Flex
        w={{
          lg: "48%",
          base: "100%",
        }}
        minH={{ base: "auto", lg: "420px" }}
        h="full"
        px={{ base: 4, md: 6 }}
        py={{ base: 4, md: 5 }}
        border="1px solid"
        borderColor={borderColor}
        rounded="28px"
        bg={cardBg}
        color={cardColor}
        backdropFilter="blur(22px) saturate(150%)"
        boxShadow="0 24px 80px rgba(0, 0, 0, .2)"
      >
        {showTestInstructions ? (
          <TestInstructions
            onCloseTestInstructions={handleCloseTestInstructions}
          />
        ) : (
          <TestQuestion />
        )}
      </Flex>
    </Flex>
  );
}
