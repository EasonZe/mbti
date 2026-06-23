import Link from "next/link";
import {
  Flex,
  Button,
  IconButton,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiHistory } from "react-icons/bi";
import { FiMoon, FiSun } from "react-icons/fi";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const navBg = useColorModeValue("rgba(244, 249, 251, .78)", "rgba(9, 16, 24, .62)");
  const navBorder = useColorModeValue("blackAlpha.100", "whiteAlpha.200");
  const navColor = useColorModeValue("gray.800", "white");
  const subtleBg = useColorModeValue("rgba(255, 255, 255, .78)", "whiteAlpha.200");
  const subtleHoverBg = useColorModeValue("rgba(230, 241, 246, .96)", "whiteAlpha.300");
  const subtleBorder = useColorModeValue("blackAlpha.100", "whiteAlpha.200");

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
      borderColor={navBorder}
      rounded="24px"
      bg={navBg}
      color={navColor}
      backdropFilter="blur(18px) saturate(145%)"
      boxShadow="0 18px 50px rgba(0, 0, 0, .18)"
    >
      <Link href="/">
        <Button
          variant="link"
          color={navColor}
          fontWeight="900"
          textTransform="uppercase"
          _hover={{ color: "primary.500", textDecoration: "none" }}
        >
          MBTI 性格测试
        </Button>
      </Link>
      <Flex gap={2} alignItems="center">
        <Link href="/test/result/history">
          <Button
            variant="solid"
            leftIcon={<BiHistory size={22} />}
            bg={subtleBg}
            color={navColor}
            border="1px solid"
            borderColor={subtleBorder}
            rounded="16px"
            _hover={{ bg: subtleHoverBg }}
          >
            测试历史
          </Button>
        </Link>
        <Tooltip label={isDark ? "切换浅色" : "切换深色"}>
          <IconButton
            aria-label="切换深浅色"
            icon={isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
            onClick={toggleColorMode}
            bg={subtleBg}
            color={navColor}
            border="1px solid"
            borderColor={subtleBorder}
            rounded="16px"
            _hover={{ bg: subtleHoverBg }}
          />
        </Tooltip>
      </Flex>
    </Flex>
  );
}
