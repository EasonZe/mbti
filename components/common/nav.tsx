import Link from "next/link";
import {
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiHistory } from "react-icons/bi";
import { FiChevronDown, FiUser } from "react-icons/fi";

import ThemeToggle from "./theme-toggle";

export default function Nav() {
  const navBg = useColorModeValue("rgba(255, 255, 255, .72)", "rgba(9, 16, 24, .58)");
  const navColor = useColorModeValue("#17232c", "white");
  const borderColor = "rgba(255,255,255,0.15)";
  const hoverColor = useColorModeValue("#5F83AE", "#D8E6F8");
  const buttonBg = useColorModeValue("rgba(255,255,255,.58)", "rgba(255,255,255,0.08)");
  const buttonHoverBg = useColorModeValue("#D8E6F8", "rgba(216,230,248,.18)");
  const menuBg = useColorModeValue("rgba(255,255,255,.94)", "rgba(14, 24, 34, .96)");

  return (
    <Flex
      as="nav"
      position="fixed"
      top={{ base: 3, md: 4 }}
      zIndex={20}
      left="50%"
      transform="translateX(-50%)"
      py={3}
      px={{ base: 3, md: 5 }}
      w={{ base: "calc(100% - 20px)", md: "min(1180px, calc(100% - 28px))" }}
      minH={{ base: 14, md: 16 }}
      justifyContent="space-between"
      alignItems="center"
      gap={{ base: 2, md: 4 }}
      overflowX="visible"
      border="1px solid"
      borderColor={borderColor}
      rounded={{ base: "22px", md: "24px" }}
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
          _hover={{ color: hoverColor, textDecoration: "none" }}
        >
          MBTI性格测试
        </Button>
      </Link>
      <Flex gap={{ base: 2, md: 3 }} alignItems="center">
        <Menu placement="bottom-end">
          <MenuButton
            as={Button}
            rightIcon={<FiChevronDown />}
            bg={buttonBg}
            color={navColor}
            border="1px solid"
            borderColor={borderColor}
            rounded="16px"
            boxShadow="0 10px 24px rgba(143,175,214,.18)"
            _hover={{ bg: buttonHoverBg, transform: "translateY(-1px)" }}
            _active={{ bg: buttonHoverBg }}
          >
            关于
          </MenuButton>
          <MenuList
            bg={menuBg}
            borderColor={borderColor}
            rounded="18px"
            p={2}
            color={navColor}
            backdropFilter="blur(18px)"
            boxShadow="0 18px 50px rgba(0,0,0,.24)"
          >
            <MenuItem
              as="a"
              href="https://my.easonzhan.xyz"
              target="_blank"
              rel="noopener noreferrer"
              icon={<FiUser />}
              rounded="14px"
              bg="transparent"
              _hover={{ bg: buttonHoverBg }}
            >
              关于站长
            </MenuItem>
          </MenuList>
        </Menu>
        <ThemeToggle />
        <Link href="/test/result/history">
          <>
            <Button
              display={{ base: "none", md: "inline-flex" }}
              variant="solid"
              leftIcon={<BiHistory size={22} />}
              bg={buttonBg}
              color={navColor}
              border="1px solid"
              borderColor={borderColor}
              rounded="16px"
              boxShadow="0 10px 24px rgba(143,175,214,.18)"
              _hover={{ bg: buttonHoverBg, transform: "translateY(-1px)" }}
              _active={{ transform: "translateY(0)" }}
            >
              测试历史
            </Button>
            <IconButton
              display={{ base: "inline-flex", md: "none" }}
              aria-label="测试历史"
              icon={<BiHistory size={22} />}
              bg={buttonBg}
              color={navColor}
              border="1px solid"
              borderColor={borderColor}
              rounded="16px"
              boxShadow="0 10px 24px rgba(143,175,214,.18)"
              _hover={{ bg: buttonHoverBg, transform: "translateY(-1px)" }}
              _active={{ transform: "translateY(0)" }}
            />
          </>
        </Link>
      </Flex>
    </Flex>
  );
}
