/* 中文标注：单个答题选项组件，负责显示 A/B 选项并处理用户点击。 */
import { useRadio, Box, useColorModeValue } from "@chakra-ui/react";

export default function TestAnswerOption(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();
  const bg = useColorModeValue("rgba(255,255,255,.62)", "rgba(255,255,255,0.08)");
  const color = useColorModeValue("#17232c", "#f4f9fb");
  const hoverBg = useColorModeValue("#D8E6F8", "rgba(216,230,248,.18)");
  const checkedBg = useColorModeValue("#B8CCE8", "#C3D4EC");
  const checkedColor = "#0b141c";

  return (
    <Box w="full" as="label">
      <input {...input} />
      <Box
        px={5}
        py={4}
        cursor="pointer"
        borderWidth={1}
        borderRadius="18px"
        borderColor="rgba(255,255,255,0.15)"
        bg={bg}
        color={color}
        fontWeight="800"
        userSelect="none"
        transition=".18s ease"
        boxShadow="0 10px 24px rgba(143,175,214,.12)"
        _hover={{ bg: hoverBg, transform: "translateY(-1px)" }}
        _checked={{
          bg: checkedBg,
          color: checkedColor,
          borderColor: "rgba(255,255,255,0.15)",
          boxShadow: "0 14px 32px rgba(143,175,214,.35)",
        }}
        _focus={{ boxShadow: "outline" }}
        {...checkbox}
      >
        {props.children}
      </Box>
    </Box>
  );
}
