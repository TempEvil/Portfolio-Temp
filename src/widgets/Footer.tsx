import { useTranslation } from "react-i18next";
import { Center, Text } from "@chakra-ui/react";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Center paddingTop={{ base: "1.5rem", lg: "1.5rem" }}>
      <Text color="theme.textSubtle" fontSize={{ base: "sm", md: "md" }}>
        &copy; {t("2026 Sok Sovannarith. All Rights Reserved.")}
      </Text>
    </Center>
  );
};

export default Footer;
