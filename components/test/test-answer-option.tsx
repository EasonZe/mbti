import { useRadio, Box, useColorModeValue } from "@chakra-ui/react";

export default function TestAnswerOption(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();
  const optionBg = useColorModeValue("rgba(255, 255, 255, .76)", "whiteAlpha.100");
  const optionHoverBg = useColorModeValue("rgba(230, 241, 246, .96)", "whiteAlpha.200");
  const optionBorder = useColorModeValue("blackAlpha.200", "whiteAlpha.300");
  const optionColor = useColorModeValue("gray.800", "whiteAlpha.900");

  return (
    <Box
      w="full"
      as="label"
    >
      <input {...input} />
      <Box
        px={5}
        py={4}
        cursor="pointer"
        borderWidth={1}
        borderRadius="18px"
        borderColor={optionBorder}
        bg={optionBg}
        color={optionColor}
        userSelect="none"
        transition=".18s ease"
        _hover={{
          bg: optionHoverBg,
          transform: "translateY(-1px)",
        }}
        _checked={{
          bg: "primary.600",
          color: "white",
          borderColor: "primary.300",
          boxShadow: "0 14px 32px rgba(159, 185, 201, .24)",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        {...checkbox}
      >
        {props.children}
      </Box>
    </Box>
  );
}
