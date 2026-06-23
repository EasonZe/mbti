import { useState } from "react";
import { Flex } from "@chakra-ui/react";

import TestMenu from "./test-menu";
import TestInstructions from "./test-instructions";
import TestQuestion from "./test-question";

export default function TestDisplay() {
  const [showTestInstructions, setShowTestInstructions] = useState(true);

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
        borderColor="whiteAlpha.200"
        rounded="28px"
        bg="rgba(18, 25, 31, .58)"
        color="whiteAlpha.900"
        backdropFilter="blur(22px) saturate(150%)"
        boxShadow="0 24px 80px rgba(0, 0, 0, .32)"
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
