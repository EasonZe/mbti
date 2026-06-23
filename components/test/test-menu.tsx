import { Flex, Button, useColorModeValue } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

import TestTimer from "./test-timer";

interface TestMenuProps {
  onShowInstructionsButtonClick: () => void;
}

export default function TestMenu(props: TestMenuProps) {
  const buttonBg = useColorModeValue("rgba(255, 255, 255, .78)", "whiteAlpha.200");
  const buttonHoverBg = useColorModeValue("rgba(230, 241, 246, .96)", "whiteAlpha.300");
  const buttonBorder = useColorModeValue("blackAlpha.100", "whiteAlpha.200");
  const buttonColor = useColorModeValue("gray.800", "white");

  return (
    <Flex
      width="full"
      my={2}
      px={4}
      direction="column"
      justifyContent="center"
      alignItems="flex-end"
      gap={2}
    >
      <Flex gap={2}>
        <TestTimer />
        <Button
          aria-label="instructions"
          variant="solid"
          leftIcon={<RiInformationLine size={24} />}
          onClick={props.onShowInstructionsButtonClick}
          h={10}
          bg={buttonBg}
          color={buttonColor}
          border="1px solid"
          borderColor={buttonBorder}
          rounded="14px"
          _hover={{ bg: buttonHoverBg }}
        >
          说明
        </Button>
      </Flex>
    </Flex>
  );
}
