import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Flex, Text, Badge, Heading, GridItem, Presence, SimpleGrid, useDisclosure } from "@chakra-ui/react";
// Style
import { ContainerHoverStyle } from "@/app/styles/style";
// Icon
import { LuLaptop, LuServer, LuWrench, LuArrowLeft, LuPencilRuler, LuTabletSmartphone } from "react-icons/lu";
// Data
import { TechStackData } from "@/shared/data/TechStackData";

const TechStack = () => {
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
        <Heading fontSize={{ base: "xl", md: "2xl" }}>{t("Full Tech Stack")}</Heading>
        <Text color="secondaryTextColor">{t("Comprehensive list of tools and technologies I use.")}</Text>
      </Flex>
      {/* List Item */}
      <SimpleGrid columns={12} gap="1rem" alignItems="stretch">
        {TechStackData.map((tech, index) => (
          <GridItem key={index} colSpan={{ base: 12, md: 6 }}>
            <Presence
              present={open}
              animationName={{
                _open: "slide-from-bottom, fade-in",
                _closed: "slide-to-bottom, fade-out",
              }}
              animationDuration={`${(index + 0.5) * 500}ms`}
              height="full"
            >
              <Flex
                {...ContainerHoverStyle}
                _hover={{ boxShadow: "none" }}
                _active={{ boxShadow: "none" }}
                height="full"
              >
                {/* Header */}
                <Flex alignItems="center" gap="0.5rem">
                  <Box fontSize="1.25rem">
                    {tech.category === "Frontend" ? (
                      <LuLaptop />
                    ) : tech.category.includes("Backend") ? (
                      <LuServer />
                    ) : tech.category.includes("Tools") ? (
                      <LuWrench />
                    ) : tech.category.includes("Mobile") ? (
                      <LuTabletSmartphone />
                    ) : (
                      <LuPencilRuler />
                    )}
                  </Box>
                  <Text fontWeight="semibold" fontSize={{ base: "lg", lg: "xl" }}>
                    {t(tech.category)}
                  </Text>
                </Flex>
                {/* Skill List */}
                <Flex flexWrap="wrap" gap="0.35rem">
                  {tech.skills.map((skill, idx) => (
                    <Badge variant="outline" key={idx} padding="0.25rem 0.5rem">
                      {skill}
                    </Badge>
                  ))}
                </Flex>
              </Flex>
            </Presence>
          </GridItem>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default TechStack;
