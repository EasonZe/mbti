import Link from "next/link";
import { MouseEvent, useState, useEffect } from "react";
import { Flex, Text, UnorderedList, ListItem } from "@chakra-ui/react";

import useHeadingsObserver from "../../hooks/use-headings-observer";

export default function TestResultTableOfContent() {
  const { activeId, setActiveId } = useHeadingsObserver();

  const [headings, setHeadings] = useState<
    {
      id: string;
      text: string;
    }[]
  >([]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2")).map(
      (element) => ({
        id: element.id,
        text: element.textContent!,
      })
    );

    setHeadings(elements);
  }, []);

  function handleTableOfContentLinkClick(
    event: MouseEvent<HTMLLIElement, globalThis.MouseEvent>,
    id: string
  ) {
    event.preventDefault();
    setActiveId(id);
  }

  return (
    <Flex
      mx={4}
      my={4}
      w={{
        base: "25%",
      }}
      h="min-content"
      p={4}
      gap={4}
      top={5}
      border="1px solid"
      borderColor="whiteAlpha.200"
      rounded="24px"
      bg="rgba(18, 25, 31, .62)"
      color="whiteAlpha.900"
      backdropFilter="blur(22px) saturate(150%)"
      boxShadow="0 24px 80px rgba(0, 0, 0, .32)"
      direction="column"
      pos="sticky"
      alignSelf="flex-start"
    >
      <Text fontWeight="bold">目录</Text>
      <UnorderedList
        spacing={2}
        listStyleType="none"
      >
        {headings.map((heading, index) => (
          <ListItem
            key={index}
            fontSize="sm"
            cursor="pointer"
            _hover={{
              borderLeft: "4px solid rgba(159, 185, 201, .9)",
              pl: 2,
            }}
            {...(heading.id === activeId && {
              color: "primary.100",
              fontWeight: "bold",
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
