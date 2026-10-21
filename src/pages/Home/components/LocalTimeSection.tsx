import moment from "moment";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
// Style
import { ContainerHoverStyle } from "@/app/styles/style";
// Icon
import { LuMapPin, LuTimer } from "react-icons/lu";

const LocalTimeSection = () => {
  const { t } = useTranslation();
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update the clock every second
  useEffect(() => {
    // Set the interval
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // CRITICAL: Clear interval when component unmounts to prevent memory leaks
    return () => clearInterval(timer);
  }, []);

  return (
    <Flex
      {...ContainerHoverStyle}
      direction="column"
      justifyContent="space-between"
      // height={{lg: "204px"}}
    >
      {/* Header */}
      <Flex alignItems="center" gap="0.5rem">
        <Box paddingBottom="0.35rem" fontSize="1.25rem">
          <LuTimer />
        </Box>
        <Text fontWeight="semibold" fontSize={{ base: "lg", lg: "xl" }}>
          {t("Local Time")}
        </Text>
      </Flex>

      <Flex alignItems="center" width="100%" height="100%">
        {/* Time and Location Display */}
        <Flex justifyContent="space-between" alignItems="flex-end" width="100%">
          <Flex direction="column">
            {/* Main Time Display */}
            <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" lineHeight={1.1}>
              {moment(currentTime).format("HH:mm:ss A")}
            </Text>
            {/* Full Date */}
            <Text fontSize="sm" color="theme.textSubtle">
              {moment(currentTime).format("ddd, DD MMM YYYY")}
            </Text>
          </Flex>

          {/* Static Location Info */}
          <Flex direction="column" alignItems="flex-end">
            <HStack alignItems="center" gap={1} fontSize="md" color="theme.accent">
              <Box paddingBottom="0.35rem">
                <LuMapPin />
              </Box>
              <Text fontWeight="semibold" lineHeight={1}>
                {t("Phnom Penh")}
              </Text>
            </HStack>
            <Text fontSize="xs" color="theme.textMuted" fontWeight="medium">
              {t("Cambodia (GMT+7)")}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LocalTimeSection;
