import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Box, Flex, GridItem, Heading, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";
// Style
import { ContainerHoverStyle } from "@/app/styles/style";
// Icon
import { LuChevronRight, LuFolderCode, LuGithub, LuScanEye } from "react-icons/lu";
// Data
import { ProjectData } from "@/shared/data/ProjectData";
// Util
import { slugConvertor } from "@/shared/utils/slugConvertor";

const ProjectSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Flex {...ContainerHoverStyle}>
      {/* Header */}
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center" gap="0.5rem">
          <Box paddingBottom="0.35rem" fontSize="1.25rem">
            <LuFolderCode />
          </Box>
          <Text fontWeight="semibold" fontSize={{ base: "lg", lg: "xl" }}>
            {t("Projects")}
          </Text>
        </Flex>
        <Flex
          as="button"
          alignItems="center"
          color="theme.textMuted"
          fontSize="sm"
          className="group"
          cursor="pointer"
          onClick={() => navigate("/projects")}
          _focusVisible={{ outline: "2px solid", outlineColor: "theme.borderFocus", rounded: "sm" }}
        >
          <Text>{t("View All")}</Text>
          <Box
            _groupHover={{ transform: "translateX(3px)" }}
            _groupActive={{ transform: "translateX(3px)" }}
            transition="all 0.15s"
          >
            <LuChevronRight />
          </Box>
        </Flex>
      </Flex>
      {/* Project List */}
      <SimpleGrid columns={12} gap="1rem">
        {ProjectData.slice(0, 4).map((project, index) => (
          <GridItem key={index} colSpan={{ base: 12, md: 6 }}>
            <Flex {...ContainerHoverStyle} gap="0.5rem" padding="0.5rem" height="300px">
              {/* Image */}
              <Box
                as="button"
                width="100%"
                minHeight="50%"
                border="1px solid"
                borderColor="theme.border"
                rounded="md"
                overflow="hidden"
                onClick={() => navigate(`/projects/detail?name=${slugConvertor(project.name)}`)}
                _focusVisible={{ outline: "2px solid", outlineColor: "theme.borderFocus", rounded: "sm" }}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  aspectRatio={16 / 9}
                  _hover={{ scale: 1.05 }}
                  _active={{ scale: 1.05 }}
                  transition="all 0.15s"
                  cursor="pointer"
                />
              </Box>
              {/* Content */}
              <Flex direction="column" justifyContent="space-between" gap="0.25rem" minHeight="45%">
                <Flex
                  direction="column"
                  gap="0.15rem"
                  onClick={() => navigate(`/projects/detail?name=${slugConvertor(project.name)}`)}
                  cursor="pointer"
                >
                  <Heading size="md" width="100%" lineClamp={1}>
                    {project.name}
                  </Heading>
                  <Text color="theme.textSubtle" lineClamp={3} fontSize="xs">
                    {project.description}
                  </Text>
                </Flex>
                {/* Actions  */}
                <Flex gap="0.35rem" justifyContent="flex-end">
                  {project?.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      _focusVisible={{ outline: "2px solid", outlineColor: "theme.borderFocus", rounded: "sm" }}
                    >
                      <Flex
                        alignItems="center"
                        fontSize="sm"
                        gap="0.25rem"
                        rounded="sm"
                        padding="0 0.5rem"
                        border="1px solid"
                        borderColor="theme.border"
                        cursor="pointer"
                        _hover={{ bgColor: "theme.bg", color: "theme.text", transform: "translateY(-3px)" }}
                        _active={{ bgColor: "theme.bg", color: "theme.text", transform: "translateY(-3px)" }}
                        transition="all 0.15s"
                      >
                        <LuScanEye />
                        {t("Demo")}
                      </Flex>
                    </Link>
                  )}
                  {project?.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      _focusVisible={{ outline: "2px solid", outlineColor: "theme.borderFocus", rounded: "sm" }}
                    >
                      <Flex
                        alignItems="center"
                        fontSize="sm"
                        gap="0.25rem"
                        rounded="sm"
                        padding="0 0.5rem"
                        border="1px solid"
                        borderColor="theme.border"
                        cursor="pointer"
                        _hover={{ bgColor: "theme.bg", color: "theme.text", transform: "translateY(-3px)" }}
                        _active={{ bgColor: "theme.bg", color: "theme.text", transform: "translateY(-3px)" }}
                        transition="all 0.15s"
                      >
                        <LuGithub />
                        {t("RithEvilx")}
                      </Flex>
                    </Link>
                  )}
                </Flex>
              </Flex>
            </Flex>
          </GridItem>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default ProjectSection;
