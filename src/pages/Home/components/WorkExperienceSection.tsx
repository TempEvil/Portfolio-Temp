import { useTranslation } from "react-i18next";
import { Box, Flex, Text } from "@chakra-ui/react";
// Style
import { ContainerHoverStyle } from "@/app/styles/style";
// Icon
import { LuBriefcaseBusiness } from "react-icons/lu";
// Component
import TimelineComponent from "@/shared/components/TimelineComponent";
// Data
import { WorkExperienceData } from "@/shared/data/WorkExperienceData";

const WorkExperienceSection = () => {
  const { t } = useTranslation();

  return (
    <Flex {...ContainerHoverStyle} paddingBottom="0.25rem">
      {/* Header */}
      <Flex alignItems="center" gap="0.5rem">
        <Box paddingBottom="0.35rem" fontSize="1.25rem">
          <LuBriefcaseBusiness />
        </Box>
        <Text fontWeight="semibold" fontSize={{ base: "lg", lg: "xl" }}>
          {t("Work Experience")}
        </Text>
      </Flex>
      {/* Timeline */}
      <TimelineComponent data={WorkExperienceData} />
    </Flex>
  );
};

export default WorkExperienceSection;
