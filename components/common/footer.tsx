import Link from "next/link";
import { Flex, Text, Button } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      as="footer"
      py={5}
      w="100%"
      bg="#091018"
      color="whiteAlpha.900"
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={1}
      borderTop="1px solid"
      borderColor="whiteAlpha.100"
    >
      <Text>
        本网站上的所有测试都基于此{" "}
        <Link
          href="/MBTI-personality-test.pdf"
          target="_blank"
        >
          <Button
            colorScheme="primary"
            variant="link"
          >
            来源
          </Button>
        </Link>
      </Text>
      <Text>
        Made by{" "}
        <Link
          href="https://github.com/EasonZhan-max/mbti"
          target="_blank"
        >
          <Button
            colorScheme="primary"
            variant="link"
          >
            Eason
          </Button>
        </Link>
      </Text>
    </Flex>
  );
}
