export const ContainerHoverStyle = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "1.5rem",
  rounded: "lg",
  padding: { base: "1rem", md: "1.25rem" },
  transition: "all 0.15s",
  border: "1px solid",
  borderColor: "theme.border",
  _hover: {
    boxShadow: "sm",
  },
  color: "theme.text",
  bgColor: { _light: "transparent", _dark: "theme.bg" },
};