import { useTranslation } from "react-i18next";
import { Box, Flex, List, Text } from "@chakra-ui/react";
// Style
import { ContainerHoverStyle } from "@/app/styles/style";
// Icon
import { LuInfo } from "react-icons/lu";
// Component
import { AboutMeData } from "@/shared/data/AboutMeData";

const AboutMeSection = () => {
  const { t } = useTranslation();

  return (
    <Flex {...ContainerHoverStyle}>
      {/* Header */}
      <Flex alignItems="center" gap="0.5rem">
        <Box paddingBottom="0.35rem" fontSize="1.25rem">
          <LuInfo />
        </Box>
        <Text fontWeight="semibold" fontSize={{ base: "lg", lg: "xl" }}>
          {t("About Me")}
        </Text>
      </Flex>
      {/* Description */}
      <List.Root listStyleType="none" gap="0.5rem">
        {AboutMeData.map((item, index) => (
          <List.Item key={index} fontSize="sm" color="theme.text">
            {t(item)}
          </List.Item>
        ))}
      </List.Root>
    </Flex>
  );
};

export default AboutMeSection;
