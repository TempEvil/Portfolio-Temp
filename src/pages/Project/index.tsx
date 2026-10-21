import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Box,
  Flex,
  Text,
  Link,
  Badge,
  Image,
  Heading,
  GridItem,
  Presence,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
// Style
import { ContainerHoverStyle } from "@/app/styles/style";
// Icon
import { LuArrowLeft, LuGithub, LuScanEye } from "react-icons/lu";
// Data
import { ProjectData } from "@/shared/data/ProjectData";
// Util
import { slugConvertor } from "@/shared/utils/slugConvertor";

const Project = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { open, onOpen } = useDisclosure({ defaultOpen: true });

  useEffect(() => {
    onOpen();
  }, [onOpen]);

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
        onClick={() => navigate("/")}
        marginTop="1rem"
      >
        <Box
          _groupHover={{ transform: "translateX(-3px)" }}
          _groupActive={{ transform: "translateX(-3px)" }}
          transition="all 0.15s"
        >
          <LuArrowLeft />
        </Box>
        <Text>{t("Back to Home")}</Text>
      </Flex>
      {/* Header */}
      <Flex direction="column" gap={{ base: "0.5rem", lg: "0.75rem" }}>
        <Heading fontSize={{ base: "xl", md: "2xl" }}>{t("Check out my lastest works")}</Heading>
        <Text color="theme.textSubtle">{t("A details gallery of my work in Web Development.")}</Text>
      </Flex>
      {/* List Item */}
      <SimpleGrid columns={12} gap="1rem">
        {ProjectData.map((project, index) => (
          <GridItem key={index} colSpan={{ base: 12, md: 6 }}>
            <Presence
              present={open}
              animationName={{
                _open: "slide-from-bottom, fade-in",
                _closed: "slide-to-bottom, fade-out",
              }}
              animationDuration={`${(index + 0.5) * 500}ms`}
            >
              <Flex
                {...ContainerHoverStyle}
                gap="0.25rem"
                padding={{ base: "0.5rem", md: "0.75rem" }}
                height={{ base: "470px", md: "500px" }}
              >
                {/* Image */}
                <Box
                  as="button"
                  width="100%"
                  minHeight={{ base: "45%", lg: "50%" }}
                  border="1px solid"
                  borderColor="theme.border"
                  rounded="md"
                  overflow="hidden"
                  onClick={() => navigate(`/projects/detail?name=${slugConvertor(project.name)}`)}
                  _focusVisible={{ outline: "2px solid", outlineColor: "blue.500", rounded: "sm" }}
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
                    transition="all 0.25s"
                    cursor="pointer"
                  />
                </Box>
                {/* Content */}
                <Flex
                  direction="column"
                  justifyContent="space-between"
                  gap="0.25rem"
                  minHeight={{ base: "54.3%", lg: "45%" }}
                >
                  {/* Header */}
                  <Flex
                    direction="column"
                    gap="0.15rem"
                    onClick={() => navigate(`/projects/detail?name=${slugConvertor(project.name)}`)}
                    cursor="pointer"
                    height={{ md: "115px", lg: "120px" }}
                  >
                    <Heading size={{ base: "lg", lg: "xl" }} width="100%" lineClamp={1}>
                      {project.name}
                    </Heading>
                    <Text color="theme.textSubtle" lineClamp={{ base: 3, md: 4 }} fontSize="sm">
                      {project.description}
                    </Text>
                  </Flex>
                  {/* Detail */}
                  <Flex direction="column" justifyContent="space-around" gap={{ base: "0.25rem", md: "0.35rem" }}>
                    {/* Stack */}
                    <Flex
                      direction={{ base: "column", lg: "row" }}
                      alignItems={{ base: "flex-start", lg: "center" }}
                      gap={{ base: "0.15rem", lg: "0.35rem" }}
                    >
                      <Text fontSize={{ base: "sm", md: "md" }} fontWeight="semibold">
                        {t("Tech Stack")}:
                      </Text>
                      <Flex alignItems="center" gap="0.35rem" flexWrap="wrap">
                        {project.stack.map((item, idx) => (
                          <Badge variant="outline" key={idx} padding="0.25rem 0.5rem">
                            {item}
                          </Badge>
                        ))}
                      </Flex>
                    </Flex>
                    {/* Date */}
                    <Flex
                      direction={{ base: "column", lg: "row" }}
                      alignItems={{ base: "flex-start", lg: "center" }}
                      gap={{ base: "0.15rem", lg: "0.35rem" }}
                    >
                      <Text fontSize={{ base: "sm", md: "md" }} fontWeight="semibold">
                        {t("Project Duration")}:
                      </Text>
                      <Text fontSize="xs">{project.date}</Text>
                    </Flex>
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
                        _focusVisible={{ outline: "2px solid", outlineColor: "blue.500", rounded: "sm" }}
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
                        _focusVisible={{ outline: "2px solid", outlineColor: "blue.500", rounded: "sm" }}
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
            </Presence>
          </GridItem>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Project;
