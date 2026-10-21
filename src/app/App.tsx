import "./providers/i18next";
import { useEffect, useState } from "react";
import { version } from "../../package.json";
import { useTranslation } from "react-i18next";
import { Float } from "@chakra-ui/react";
// Components
import Router from "./router/router";
import { Toaster } from "@/shared/components/ui/toaster";

const App = () => {
  const [isDebug] = useState<boolean>(() => localStorage.getItem("debug") === "true");
  const [isProjectDate] = useState<boolean>(() => localStorage.getItem("projectDate") === "true");
  const { i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage ?? i18n.language;

  useEffect(() => {
    const setDefault = (key: string, value: string) => {
      if (localStorage.getItem(key) === null) localStorage.setItem(key, value);
    };

    setDefault("debug", "false");
    setDefault("projectDate", "false");
  }, []);

  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  return (
    <>
      <Toaster />
      <Router />
      {isDebug && (
        <Float top="20px" right="60px" zIndex={99999}>
          Version {version}
        </Float>
      )}
      {isProjectDate && (
        <Float top="20px" right="110px" zIndex={99999}>
          Created Date: 12 Feb 2026
        </Float>
      )}
    </>
  );
};

export default App;
