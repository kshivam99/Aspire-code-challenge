import { Box, Flex, Text } from "@mantine/core";
import React from "react";
import styles from "./CardAction.module.css";

interface CardActionProps {
  children: JSX.Element;
  tag: string;
}

function CardAction({ children, tag }: CardActionProps) {
  return (
    <Flex
      justify="flex-start"
      gap="10px"
      align="center"
      direction="column"
      className={styles.container}
    >
      <Box>{children}</Box>
      <Box className={styles.tag}>
        <Text size={"12px"} c="#0C365A" >
          {tag}
        </Text>
      </Box>
    </Flex>
  );
}

export default CardAction;
