import { Box, Flex, Text } from "@mantine/core";
import React from "react";
import styles from "./CardAction.module.css";

interface CardActionProps {
  children: JSX.Element;
  tag: string;
  clickHandle?: () => void;
}

function CardAction({ children, tag, clickHandle }: CardActionProps) {
  return (
    <Flex
      justify="flex-start"
      gap="10px"
      align="center"
      direction="column"
      className={styles.container}
      onClick={clickHandle}
    >
      <Box>{children}</Box>
      <Box className={styles.tag}>
        <Text size={"12px"} c="#0C365A">
          {tag}
        </Text>
      </Box>
    </Flex>
  );
}

export default CardAction;
