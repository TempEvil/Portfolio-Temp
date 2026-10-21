import "./Loading.css";
import { Box, Flex } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Flex width="100dvw" height="100dvh" justifyContent="center" alignItems="center">
      <Flex gap="0.35rem" className="loading">
        <Box boxSize="10px" rounded="full" bgColor="theme.text"></Box>
        <Box boxSize="10px" rounded="full" bgColor="theme.text"></Box>
        <Box boxSize="10px" rounded="full" bgColor="theme.text"></Box>
      </Flex>
    </Flex>
  );
};

export default Loading;
