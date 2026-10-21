import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Badge, Box, Flex, GridItem, Heading, List, SimpleGrid, Span, Text, VStack } from "@chakra-ui/react";
// Style
import { ContainerHoverStyle } from "@/app/styles/style";
// Icon
import { LuArrowLeft, LuGoal, LuStar } from "react-icons/lu";
// Data
import { ProjectData } from "@/shared/data/ProjectData";
// Util
import { slugConvertor } from "@/shared/utils/slugConvertor";

const ProjectDetail = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // 1. Destructure the searchParams object
  const [searchParams] = useSearchParams();

  // 2. Get the specific "name" query parameter
  const projectName = searchParams.get("name");

  const project = ProjectData.find((p) => slugConvertor(p.name) === projectName);

  useEffect(() => {
    const scrollTimer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 0);

    return () => clearTimeout(scrollTimer);
  }, []);

  return (
    <Flex direction="column" gap={{ base: "2rem", lg: "2.5rem" }}>
      {/* Navigation */}
      <Flex
        alignItems="center"
        fontSize="sm"
        gap="0.25rem"
        className="group"
        cursor="pointer"
        onClick={() => navigate("/projects")}
        marginTop="1rem"
      >
        <Box
          _groupHover={{ transform: "translateX(-3px)" }}
          _groupActive={{ transform: "translateX(-3px)" }}
          transition="all 0.15s"
        >
          <LuArrowLeft />
        </Box>
        <Text>{t("Back to Projects")}</Text>
      </Flex>
      {/* Header */}
      <Flex direction="column" gap={{ base: "0.5rem", lg: "0.75rem" }}>
        <Heading fontSize={{ base: "2xl", md: "3xl" }}>{project?.name}</Heading>
        <Text color="theme.textMuted">{project?.description}</Text>
      </Flex>
      {/* Content */}
      <SimpleGrid columns={12} gap="1rem">
        <GridItem colSpan={{ base: 12, lg: 8 }}>
          <Flex direction="column" gap="1.5rem">
            <Flex direction="column" gap="0.5rem">
              <Flex alignItems="center" gap="0.5rem">
                <Box fontSize="1.25rem">
                  <LuGoal />
                </Box>
                <Heading fontSize="xl">{t("System Objective")}</Heading>
              </Flex>
              <Text color="theme.textMuted">{project?.story}</Text>
            </Flex>
            <Flex direction="column" gap="0.5rem">
              <Flex alignItems="center" gap="0.5rem">
                <Box fontSize="1.25rem">
                  <LuStar />
                </Box>
                <Heading fontSize="xl">{t("Key Contributions")}</Heading>
              </Flex>
              <List.Root listStylePosition="inside">
                {project?.keyContributions?.map((key, idx) => (
                  <List.Item key={idx}>
                    <Span fontWeight="semibold">{key?.title}:</Span> <Span color="theme.textMuted">{key?.task}</Span>
                  </List.Item>
                ))}
              </List.Root>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem colSpan={{ base: 12, lg: 4 }}>
          <VStack gap={4} width="full">
            <Flex {...ContainerHoverStyle} _hover={{ boxShadow: "none" }} _active={{ boxShadow: "none" }} gap="0.5rem">
              <Text fontWeight="semibold" fontSize={{ base: "lg", lg: "xl" }}>
                {t("Tech Stack")}
              </Text>
              {/* Skill List */}
              <Flex flexWrap="wrap" gap="0.35rem">
                {project?.stack.map((item, idx) => (
                  <Badge variant="outline" key={idx} padding="0.25rem 0.5rem">
                    {item}
                  </Badge>
                ))}
              </Flex>
            </Flex>
            {project?.disclaimer && (
              <Flex
                {...ContainerHoverStyle}
                _hover={{ boxShadow: "none" }}
                _active={{ boxShadow: "none" }}
                gap="0.5rem"
              >
                <Text fontWeight="semibold" fontSize={{ base: "lg", lg: "xl" }}>
                  {t("Disclaimer")}
                </Text>
                <Text color="theme.textMuted">{project.disclaimer}</Text>
              </Flex>
            )}
          </VStack>
        </GridItem>
      </SimpleGrid>
    </Flex>
  );
};

export default ProjectDetail;
