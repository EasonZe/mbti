/* 中文标注：答题计时器组件，从进入测试页开始计时。 */
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
  const bg = useColorModeValue("rgba(255,255,255,.64)", "rgba(255,255,255,0.08)");
  const color = useColorModeValue("#17232c", "#f4f9fb");
  const borderColor = "rgba(255,255,255,0.15)";

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
      minW={136}
      px={4}
      h={12}
      columnGap={3}
      justifyContent="center"
      alignItems="center"
      border="1px solid"
      borderColor={borderColor}
      rounded="18px"
      bg={bg}
      color={color}
      fontWeight="900"
      boxShadow="0 10px 24px rgba(143,175,214,.18)"
      backdropFilter="blur(14px)"
    >
      <FiClock size={22} />
      <Text fontWeight="900" fontSize="lg" sx={{ fontVariantNumeric: "tabular-nums" }}>
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
