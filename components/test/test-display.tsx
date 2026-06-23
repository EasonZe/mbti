import { useState } from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";

import TestMenu from "./test-menu";
import TestInstructions from "./test-instructions";
import TestQuestion from "./test-question";

export default function TestDisplay() {
  const [showTestInstructions, setShowTestInstructions] = useState(true);
  const panelBg = useColorModeValue("rgba(255, 255, 255, .76)", "rgba(18, 25, 31, .58)");
  const panelBorder = useColorModeValue("blackAlpha.100", "whiteAlpha.200");
  const panelColor = useColorModeValue("gray.800", "whiteAlpha.900");

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
      gap={4}
      px={1}
      py={6}
    >
      <TestMenu
        onShowInstructionsButtonClick={handleShowInstructionsButtonClick}
      />
      <Flex
        w={{
          lg: "50%",
          base: "100%",
        }}
        minH={{ base: "auto", lg: "560px" }}
        h="full"
        px={{ base: 5, md: 8 }}
        py={{ base: 6, md: 8 }}
        border="1px solid"
        borderColor={panelBorder}
        rounded="28px"
        bg={panelBg}
        color={panelColor}
        backdropFilter="blur(22px) saturate(150%)"
        boxShadow="0 24px 80px rgba(0, 0, 0, .18)"
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
