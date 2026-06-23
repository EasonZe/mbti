import { useState, useEffect } from "react";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { FiClock } from "react-icons/fi";
import { Option } from "@swan-io/boxed";
import dayjs from "dayjs";

const SECOND_IN_MILISECONDS = 1000;

export default function TestTimer() {
  const [elapsedTime, setElapsedTime] = useState<Option<dayjs.Dayjs>>(
    Option.None()
  );
  const timerBg = useColorModeValue("rgba(255, 255, 255, .76)", "whiteAlpha.100");
  const timerBorder = useColorModeValue("blackAlpha.100", "whiteAlpha.200");
  const timerColor = useColorModeValue("gray.800", "whiteAlpha.900");

  useEffect(() => {
    if (elapsedTime.isNone()) {
      setElapsedTime(Option.Some(dayjs().minute(0).second(0).millisecond(0)));
      return;
    }

    const intervalId = setTimeout(() => {
      setElapsedTime((elapsedTime) =>
        elapsedTime.map((elapsedTime) => elapsedTime.add(1000, "ms"))
      );
    }, SECOND_IN_MILISECONDS);

    return () => clearTimeout(intervalId);
  }, [elapsedTime]);

  return (
    <Flex
      width={110}
      px={3}
      h={10}
      columnGap={2}
      justifyContent="flex-start"
      alignItems="center"
      border="1px solid"
      borderColor={timerBorder}
      rounded="14px"
      bg={timerBg}
      color={timerColor}
    >
      <FiClock size={20} />
      <Text fontWeight="bold">
        {elapsedTime.match({
          Some: (elapsedTime) => {
            const minute = elapsedTime.minute().toString().padStart(2, "0");
            const second = elapsedTime.second().toString().padStart(2, "0");

            return `${minute} : ${second}`;
          },
          None: () => "-- : --",
        })}
      </Text>
    </Flex>
  );
}
