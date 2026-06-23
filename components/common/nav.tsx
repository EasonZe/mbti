import Link from "next/link";
import { Flex, Button, Text } from "@chakra-ui/react";
import { BiHistory } from "react-icons/bi";

export default function Nav() {
  return (
    <Flex
      as="nav"
      position="sticky"
      top={4}
      zIndex={10}
      mt={4}
      mx="auto"
      py={3}
      px={{ base: 4, md: 5 }}
      w="min(1180px, calc(100% - 28px))"
      minH={16}
      justifyContent="space-between"
      alignItems="center"
      gap={4}
      overflowX="hidden"
      border="1px solid"
      borderColor="whiteAlpha.200"
      rounded="24px"
      bg="rgba(9, 16, 24, .55)"
      color="white"
      backdropFilter="blur(18px) saturate(145%)"
      boxShadow="0 18px 50px rgba(0, 0, 0, .28)"
    >
      <Flex
        gap={4}
        alignItems="center"
        overflowX="hidden"
      >
        <Link href="/">
          <Button
            variant="link"
            color="white"
            fontWeight="900"
            textTransform="uppercase"
            _hover={{ color: "primary.200", textDecoration: "none" }}
          >
            MBTI 性格测试
          </Button>
        </Link>
        <Text
          display={{ base: "none", md: "block" }}
          fontSize="sm"
          color="whiteAlpha.700"
          fontWeight="700"
        >
          Easonzhan.xyz 风格背景
        </Text>
      </Flex>
      <Link href="/test/result/history">
        <Button
          variant="solid"
          leftIcon={<BiHistory size={22} />}
          bg="whiteAlpha.200"
          color="white"
          border="1px solid"
          borderColor="whiteAlpha.200"
          _hover={{ bg: "whiteAlpha.300" }}
        >
          测试历史
        </Button>
      </Link>
    </Flex>
  );
}
