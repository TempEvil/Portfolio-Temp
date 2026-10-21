import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@chakra-ui/react";
// Icon
import { LuArrowUp } from "react-icons/lu";

const ScrollToTopButton = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Logic: Only show if scrolled > 100 AND we aren't on /resume
      if (window.scrollY > 100 && pathname !== "/resume") {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [pathname]); // Re-run logic when the page changes

  // Hard block: If we are on the resume page, render nothing
  if (pathname === "/resume") {
    return null;
  }

  return (
    <Button
      variant="outline"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      position="fixed"
      bottom={{ base: "1rem", md: "2rem" }}
      right={{ base: "-0.25rem", md: "1rem" }}
      transform={isVisible ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(20px)"}
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="10"
      height="10"
      opacity={isVisible ? 1 : 0}
      pointerEvents={isVisible ? "auto" : "none"}
      transition="all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
      zIndex="skipLink"
      borderColor="theme.border"
      rounded="full"
      color="theme.text"
      bgColor="theme.bg"
      _hover={{ transform: "translateX(-50%) scale(1.1)" }}
      backdropFilter="blur(3px)"
    >
      <LuArrowUp />
    </Button>
  );
};

export default ScrollToTopButton;
