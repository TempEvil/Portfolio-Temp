import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useColorMode } from "@/app/providers/use-color-mode";
import { Box, Button, Flex, Group, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react";
// Images
import Love from "/imgs/love.png";
// Icons
import { LuFileSpreadsheet, LuMail, LuMapPin, LuMoon, LuSun } from "react-icons/lu";
// Data
import { ProfileData } from "@/shared/data/ProfileData";
// Constants
import { ProfileImage, ProfileImageAwake, ProfileImageSleep, ProfileImageSmile } from "@/app/configs/app";

const HeaderSection = () => {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        setIsClicked(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isClicked]);

  const currentLng = i18n.resolvedLanguage ?? i18n.language;

  const handleChangeLanguage = (next: "en" | "km") => {
    i18n.changeLanguage(next);
  };

  const isMobileOrMd = useBreakpointValue({ base: true, md: true, lg: false });

  const mailTo = `mailto:${ProfileData.email}?subject=Inquiry from Portfolio&body=Dear Mr. ${ProfileData.name},%0D%0A%0D%0AI saw your portfolio and would like to chat about...%0D%0A%0D%0ABest regards,`;

  const handleNavigateResume = () => {
    navigate("/resume");
  };

  return (
    <Flex direction="column" gap="1rem" marginBottom={{ base: "1rem", lg: "2rem" }}>
      <Flex alignItems="center" gap={{ base: "1rem", lg: "1.75rem" }}>
        {/* Profile */}
        <Box
          width={{ base: "100px", md: "150px", lg: "150px" }}
          height={{ base: "100px", md: "150px", lg: "150px" }}
          minWidth={{ base: "100px", md: "150px", lg: "150px" }}
          minHeight={{ base: "100px", md: "150px", lg: "150px" }}
          rounded="lg"
          border="1px solid"
          borderColor="theme.border"
          overflow="hidden"
          onMouseEnter={() => !isMobileOrMd && setIsHovered(true)}
          onMouseLeave={() => !isMobileOrMd && setIsHovered(false)}
          onClick={() => {
            if (isMobileOrMd) {
              setIsClicked(true);
            }
          }}
          cursor="pointer"
          _active={{ opacity: 0.8 }}
        >
          <Image
            src={
              isClicked || isHovered
                ? colorMode === "dark"
                  ? ProfileImageAwake
                  : ProfileImageSmile
                : colorMode === "dark"
                  ? ProfileImageSleep
                  : ProfileImage
            }
            alt="Handsome Boy!"
            loading="lazy"
            width="100%"
            height="100%"
            objectFit="cover"
            transition="all 0.3s linear"
          />
        </Box>
        {/* Info */}
        <Flex direction="column" width="100%" gap="0">
          {/* Name */}
          <Flex alignItems="flex-start" justifyContent="space-between" gap="0.5rem">
            <Heading fontSize={{ base: "lg", md: "xl", lg: "2xl" }} position="relative" width="fit-content">
              {t(`${ProfileData.name}`)}
              <Box boxSize="25px" position="absolute" top="-1rem" right="-1rem">
                <Image src={Love} alt="Love" loading="lazy" width="100%" height="100%" />
              </Box>
            </Heading>
            {/* Toggle Theme */}
            <Button variant="outline" onClick={toggleColorMode} rounded="md" size="xs">
              {colorMode === "dark" ? <LuMoon /> : <LuSun />}
            </Button>
          </Flex>
          {/* Location */}
          <Flex alignItems="center" gap="0.25rem" fontSize="xs" color="theme.textSubtle">
            <Box paddingBottom="0.15rem">
              <LuMapPin />
            </Box>
            <Text>{t(`${ProfileData.location}`)}</Text>
          </Flex>
          {/* Role */}
          <Text
            fontWeight="semibold"
            marginBlock={{ base: "0.45rem 0.25rem", md: "0.35rem" }}
            fontSize={{ base: "sm", md: "md" }}
          >
            {t(`${ProfileData.role}`)}
          </Text>
          {/* Actions Button - Table & Desktop */}
          <Flex gap="0.5rem" display={{ base: "none", md: "flex" }}>
            {/* View Resume */}
            <Button
              paddingInline="1rem"
              alignItems="center"
              variant="outline"
              _hover={{ bgColor: "theme.bg", color: "theme.text", transform: "translateY(-3px)" }}
              transition="all 0.3s"
              rounded="md"
              onClick={handleNavigateResume}
            >
              <LuFileSpreadsheet />
              <Text lineHeight={1} fontWeight="semibold">
                {t("View Resume")}
              </Text>
            </Button>
            {/* Send Email */}
            <a href={mailTo}>
              <Button
                paddingInline="1rem"
                alignItems="center"
                variant="outline"
                _hover={{ bgColor: "theme.bg", color: "theme.text", transform: "translateY(-3px)" }}
                transition="all 0.3s"
                rounded="md"
              >
                <LuMail />
                <Text lineHeight={1} fontWeight="semibold">
                  {t("Send Email")}
                </Text>
              </Button>
            </a>
            {/* Language Switcher */}
            <Group attached rounded="lg">
              <Button
                variant={currentLng === "km" ? "solid" : "outline"}
                fontWeight={currentLng === "km" ? "bold" : "semibold"}
                aria-pressed={currentLng === "km"}
                onClick={() => handleChangeLanguage("km")}
                bgColor={currentLng === "km" ? "theme.accent" : undefined}
                color={currentLng === "km" ? "white" : undefined}
                borderColor={currentLng === "km" ? "theme.accent" : undefined}
                _hover={{
                  bgColor: currentLng === "km" ? "theme.accent" : undefined,
                  transform: "translateY(-3px)",
                }}
                _active={{ transform: "translateY(-3px)" }}
              >
                {t("KM")}
              </Button>

              <Button
                variant={currentLng === "en" ? "solid" : "outline"}
                fontWeight={currentLng === "en" ? "bold" : "semibold"}
                aria-pressed={currentLng === "en"}
                onClick={() => handleChangeLanguage("en")}
                bgColor={currentLng === "en" ? "theme.accent" : undefined}
                color={currentLng === "en" ? "white" : undefined}
                borderColor={currentLng === "en" ? "theme.accent" : undefined}
                _hover={{
                  bgColor: currentLng === "en" ? "theme.accent" : undefined,
                  transform: "translateY(-3px)",
                }}
                _active={{ transform: "translateY(-3px)" }}
              >
                {t("EN")}
              </Button>
            </Group>
          </Flex>
        </Flex>
      </Flex>
      {/* Actions Button - Mobile */}
      <Flex gap="0.5rem" display={{ base: "flex", md: "none" }}>
        {/* View Resume */}
        <Button
          paddingInline="1rem"
          alignItems="center"
          variant="outline"
          _hover={{ bgColor: "theme.bg", color: "theme.text", transform: "translateY(-3px)" }}
          _active={{ bgColor: "theme.bg", color: "theme.text", transform: "translateY(-3px)" }}
          transition="all 0.3s"
          rounded="md"
          size="xs"
          onClick={handleNavigateResume}
        >
          <LuFileSpreadsheet />
          <Text lineHeight={1} fontWeight="semibold">
            {t("View Resume")}
          </Text>
        </Button>
        {/* Send Email */}
        <a href={mailTo}>
          <Button
            paddingInline="1rem"
            alignItems="center"
            variant="outline"
            _hover={{ bgColor: "theme.bg", color: "theme.text", transform: "translateY(-3px)" }}
            _active={{ bgColor: "theme.bg", color: "theme.text", transform: "translateY(-3px)" }}
            transition="all 0.3s"
            rounded="md"
            size="xs"
          >
            <LuMail />
            <Text lineHeight={1} fontWeight="semibold">
              {t("Send Email")}
            </Text>
          </Button>
        </a>
        {/* Language Switcher */}
        <Group attached rounded="lg">
          <Button
            variant={currentLng === "km" ? "solid" : "outline"}
            fontWeight={currentLng === "km" ? "bold" : "semibold"}
            aria-pressed={currentLng === "km"}
            onClick={() => handleChangeLanguage("km")}
            bgColor={currentLng === "km" ? "theme.accent" : undefined}
            color={currentLng === "km" ? "white" : undefined}
            borderColor={currentLng === "km" ? "theme.accent" : undefined}
            size="xs"
            _hover={{
              bgColor: currentLng === "km" ? "theme.accent" : undefined,
              transform: "translateY(-3px)",
            }}
            _active={{ transform: "translateY(-3px)" }}
            transition="all 0.3s"
          >
            {t("KM")}
          </Button>

          <Button
            variant={currentLng === "en" ? "solid" : "outline"}
            fontWeight={currentLng === "en" ? "bold" : "semibold"}
            aria-pressed={currentLng === "en"}
            onClick={() => handleChangeLanguage("en")}
            bgColor={currentLng === "en" ? "theme.accent" : undefined}
            color={currentLng === "en" ? "white" : undefined}
            borderColor={currentLng === "en" ? "theme.accent" : undefined}
            size="xs"
            _hover={{
              bgColor: currentLng === "en" ? "theme.accent" : undefined,
              transform: "translateY(-3px)",
            }}
            _active={{ transform: "translateY(-3px)" }}
          >
            {t("EN")}
          </Button>
        </Group>
      </Flex>
    </Flex>
  );
};

export default HeaderSection;
