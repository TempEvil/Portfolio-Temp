import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Badge, Box, Flex, Heading, Text } from "@chakra-ui/react";
// Style
import { ContainerHoverStyle } from "@/app/styles/style";
// Icon
import { LuChevronRight, LuSettings } from "react-icons/lu";
// Data
import { TechStackData } from "@/shared/data/TechStackData";

const TechStackSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Flex {...ContainerHoverStyle}>
      {/* Header */}
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center" gap="0.5rem">
                <Box paddingBottom="0.35rem" fontSize="1.25rem">
            <LuSettings />
          </Box>
          <Text fontWeight="semibold" fontSize={{ base: "lg", lg: "xl" }}>
            {t("Tech Stack")}
          </Text>
        </Flex>
        <Flex
          as="button"
          alignItems="center"
          color="theme.textMuted"
          fontSize="sm"
          className="group"
          cursor="pointer"
          onClick={() => navigate("/tech-stacks")}
          _focusVisible={{ outline: "2px solid", outlineColor: "blue.500", rounded: "sm" }}
        >
          <Text>{t("View All")}</Text>
          <Box _groupHover={{ transform: "translateX(3px)" }} _groupActive={{ transform: "translateX(3px)" }} transition="all 0.15s">
            <LuChevronRight />
          </Box>
        </Flex>
      </Flex>
      {/* Tech Stack List */}
      {TechStackData.map((tech, index) => (
        <Flex key={index} direction="column" gap="0.5rem">
          <Heading size="md">{t(tech.category)}</Heading>
          {/* Skill List */}
          <Flex flexWrap="wrap" gap="0.35rem">
            {tech.skills.map((skill, idx) => (
              <Badge variant="outline" key={idx} padding="0.25rem 0.5rem">
                {skill}
              </Badge>
            ))}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default TechStackSection;