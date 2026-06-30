/* 中文标注：结果页右侧目录组件，点击可快速跳到结果文章对应段落。 */
import Link from "next/link";
import { MouseEvent, useState, useEffect } from "react";
import { Flex, Text, UnorderedList, ListItem, useColorModeValue } from "@chakra-ui/react";

import useHeadingsObserver from "../../hooks/use-headings-observer";

export default function TestResultTableOfContent() {
  const { activeId, setActiveId } = useHeadingsObserver();
  const cardBg = useColorModeValue("rgba(255, 255, 255, .72)", "rgba(18, 25, 31, .62)");
  const cardColor = useColorModeValue("#17232c", "#f4f9fb");
  const borderColor = useColorModeValue("rgba(86, 119, 137, .18)", "rgba(255, 255, 255, .18)");
  const activeColor = useColorModeValue("#5F83AE", "#D8E6F8");

  const [headings, setHeadings] = useState<
    {
      id: string;
      text: string;
    }[]
  >([]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2")).map(
      (element) => ({ id: element.id, text: element.textContent! })
    );

    setHeadings(elements);
  }, []);

  function handleTableOfContentLinkClick(
    event: MouseEvent<HTMLLIElement, globalThis.MouseEvent>,
    id: string
  ) {
    event.preventDefault();
    setActiveId(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <Flex
      mx={{ base: 0, lg: 4 }}
      my={{ base: 4, lg: 0 }}
      w={{ base: "full", lg: "300px" }}
      h="min-content"
      maxH={{ base: "none", lg: "calc(100vh - 132px)" }}
      p={4}
      gap={4}
      border="1px solid"
      borderColor={borderColor}
      rounded="24px"
      bg={cardBg}
      color={cardColor}
      backdropFilter="blur(22px) saturate(150%)"
      boxShadow="0 24px 80px rgba(0, 0, 0, .2)"
      direction="column"
      alignSelf={{ base: "stretch", lg: "flex-start" }}
      flexShrink={0}
      overflow="hidden"
    >
      <Text fontWeight="900" fontSize="lg">目录</Text>
      <UnorderedList spacing={2} listStyleType="none" m={0}>
        {headings.map((heading, index) => (
          <ListItem
            key={index}
            fontSize="sm"
            cursor="pointer"
            rounded="12px"
            px={2}
            py={1}
            _hover={{ bg: "rgba(216,230,248,.14)" }}
            {...(heading.id === activeId && {
              color: activeColor,
              fontWeight: "bold",
              bg: "rgba(216,230,248,.12)",
            })}
            onClick={(event) =>
              handleTableOfContentLinkClick(event, heading.id)
            }
          >
            <Link href={`#${heading.id}`}>{heading.text}</Link>
          </ListItem>
        ))}
      </UnorderedList>
    </Flex>
  );
}
