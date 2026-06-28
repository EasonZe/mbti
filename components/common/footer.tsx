import { useEffect, useState } from "react";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

const SITE_START_DATE = "2026-06-23T18:00:00+08:00";

function formatRuntime(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(totalSeconds / (24 * 60 * 60));
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return `${days}天 ${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export default function Footer() {
  const [runtime, setRuntime] = useState("0天 00:00:00");
  const cardBg = useColorModeValue("rgba(255,255,255,.56)", "rgba(18, 25, 31, .56)");
  const color = useColorModeValue("#17232c", "whiteAlpha.900");
  const mutedColor = useColorModeValue("rgba(23, 35, 44, .72)", "whiteAlpha.700");

  useEffect(() => {
    const startTime = new Date(SITE_START_DATE).getTime();
    const updateRuntime = () => setRuntime(formatRuntime(Date.now() - startTime));

    updateRuntime();
    const intervalId = window.setInterval(updateRuntime, 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <Flex
      as="footer"
      w="100%"
      justifyContent="center"
      px={{ base: 3, md: 6 }}
      pb={{ base: 4, md: 6 }}
      pt={{ base: 1, md: 2 }}
    >
      <Flex
        w={{ base: "100%", md: "min(1180px, calc(100% - 28px))" }}
        minH={{ base: "88px", md: "124px" }}
        px={{ base: 5, md: 10 }}
        py={{ base: 4, md: 6 }}
        rounded={{ base: "24px", md: "32px" }}
        bg={cardBg}
        color={color}
        border="1px solid rgba(255,255,255,0.15)"
        backdropFilter="blur(18px) saturate(145%)"
        boxShadow="0 18px 50px rgba(0, 0, 0, .18)"
        position="relative"
        overflow="hidden"
        alignItems="center"
        justifyContent="center"
        direction="column"
        gap={1}
        _before={{
          content: '""',
          position: "absolute",
          left: { base: "-28px", md: "40px" },
          top: { base: "-8px", md: "-30px" },
          width: { base: "110px", md: "180px" },
          height: { base: "110px", md: "180px" },
          borderRadius: "50%",
          filter: "blur(48px)",
          opacity: 0.18,
          background: "radial-gradient(circle, rgba(143,175,214,.75), transparent 70%)",
        }}
      >
        <Text
          fontWeight="900"
          fontSize={{ base: "2xl", md: "4xl" }}
          lineHeight="1"
          textAlign="center"
          sx={{ fontVariantNumeric: "tabular-nums" }}
          position="relative"
          zIndex={1}
        >
          {runtime}
        </Text>
        <Text color={mutedColor} fontWeight="700" fontSize={{ base: "md", md: "2xl" }} position="relative" zIndex={1}>
          运行时间
        </Text>
      </Flex>
    </Flex>
  );
}
