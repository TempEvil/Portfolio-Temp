import { Box } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";

const PublicLayout = () => {
  const { pathname } = useLocation();

  return (
    <Box padding={pathname === "/resume" ? "0" : { base: "1rem", lg: "2rem 20%" }}>
      <Outlet />
    </Box>
  );
};

export default PublicLayout;
