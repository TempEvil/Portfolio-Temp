import { useTranslation } from "react-i18next";
import { Box, Flex, Text } from "@chakra-ui/react";
// Style
import { ContainerHoverStyle } from "@/app/styles/style";
// Icon
import { LuGraduationCap } from "react-icons/lu";
// Component
import TimelineComponent from "@/shared/components/TimelineComponent";
// Data
import { EducationData } from "@/shared/data/EducationData";

const EducationSection = () => {
  const { t } = useTranslation();

  return (
    <Flex {...ContainerHoverStyle} paddingBottom="0.25rem">
      {/* Header */}
      <Flex alignItems="center" gap="0.5rem">
        <Box paddingBottom="0.35rem" fontSize="1.25rem">
          <LuGraduationCap />
        </Box>
        <Text fontWeight="semibold" fontSize={{ base: "lg", lg: "xl" }}>
          {t("Education")}
        </Text>
      </Flex>
      {/* Timeline */}
      <TimelineComponent data={EducationData} />
    </Flex>
  );
};

export default EducationSection;
