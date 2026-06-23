import Link from "next/link";
import { Flex, Text, Button, useColorModeValue } from "@chakra-ui/react";

export default function Footer() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const footerBg = useColorModeValue("#eef5f8", "#091018");
  const footerColor = useColorModeValue("gray.700", "whiteAlpha.900");
  const footerBorder = useColorModeValue("blackAlpha.100", "whiteAlpha.100");

  return (
    <Flex
      as="footer"
      py={5}
      w="100%"
      bg={footerBg}
      color={footerColor}
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={1}
      borderTop="1px solid"
      borderColor={footerBorder}
    >
      <Text>
        本网站上的所有测试都基于此{" "}
        <Link
          href={`${basePath}/MBTI-personality-test.pdf`}
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
