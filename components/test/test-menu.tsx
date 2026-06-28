import { Flex, Button } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

import TestTimer from "./test-timer";

interface TestMenuProps {
  onShowInstructionsButtonClick: () => void;
}

export default function TestMenu(props: TestMenuProps) {
  return (
    <Flex
      width="full"
      my={0}
      px={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={1}
      position="relative"
      zIndex={2}
    >
      <Flex gap={3} wrap="wrap" justifyContent="center">
        <TestTimer />
        <Button
          aria-label="instructions"
          colorScheme="primary"
          variant="solid"
          leftIcon={<RiInformationLine size={24} />}
          onClick={props.onShowInstructionsButtonClick}
          h={12}
          px={6}
        >
          说明
        </Button>
      </Flex>
    </Flex>
  );
}
