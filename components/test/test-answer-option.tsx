import { useRadio, Box } from "@chakra-ui/react";

export default function TestAnswerOption(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();

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
        borderColor="whiteAlpha.300"
        bg="whiteAlpha.100"
        color="whiteAlpha.900"
        userSelect="none"
        transition=".18s ease"
        _hover={{
          bg: "whiteAlpha.200",
          transform: "translateY(-1px)",
        }}
        _checked={{
          bg: "primary.500",
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
