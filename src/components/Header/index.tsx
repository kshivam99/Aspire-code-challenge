import React from "react";
import { Button, Center, Flex, Text, Image, Box } from "@mantine/core";
import styles from "./Header.module.css";
import { ReactComponent as AddIcon } from "../../assets/add.svg";
import Logo from "../../assets/logo.svg";

interface HeaderProps {
  balance: number;
}

function Header({ balance }: HeaderProps): JSX.Element {
  return (
    <Flex className={styles.container}>
      <Flex direction={"column"}>
        <Text className={styles.balanceHeader} fw={500} c="white" style={{marginTop: 20}}>
          Account Balance
        </Text>
        <Flex direction={"column"}>
          <Flex align="center" gap="xs">
            <Center className={styles.balanceTag}>
              <Text fw={500}>S$</Text>
            </Center>
            <Text className={styles.balanceAmount} fw={700} c="white">
              {balance}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex direction={'column'} align='flex-end' justify={'space-between'}>
        <Box className={styles.logoContainer}>
        <Image src={Logo} h={33} w={33}/>
        </Box>
        <Button leftSection={<AddIcon />} variant="transparent" size={'md'} color="#23CEFD">
          New card
        </Button>
      </Flex>
    </Flex>
  );
}

export default Header;
