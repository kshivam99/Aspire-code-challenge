import React, { useState } from "react";
import {
  Button,
  Center,
  Flex,
  Text,
  Image,
  Box,
  Modal,
  Input,
} from "@mantine/core";
import styles from "./Header.module.css";
import AddIcon from "../../assets/add.svg";
import Logo from "../../assets/logo.svg";
import { useDisclosure } from "@mantine/hooks";
import { useCardContext } from "../../context/CardContext";

interface HeaderProps {
  balance: number;
}

function Header({ balance }: HeaderProps): JSX.Element {
  const [opened, { open, close }] = useDisclosure(false);
  const { dispatch } = useCardContext();
  const [cardName, setCardName] = useState("");

  const handleAddNewCard = () => {
    dispatch({ type: "ADD_CARD", payload: cardName });
    close();
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardName(e.target.value);
  };

  return (
    <Flex className={styles.container}>
      <Flex direction={"column"} gap="20px" style={{ paddingBottom: 8 }}>
        <Text
          className={styles.balanceHeader}
          fw={500}
          c="white"
          style={{ marginTop: 20 }}
        >
          Account Balance
        </Text>
        <Flex align="center" gap="xs">
          <Center className={styles.balanceTag}>
            <Text fw={500}>S$</Text>
          </Center>
          <Text className={styles.balanceAmount} fw={700} c="white">
            {balance}
          </Text>
        </Flex>
      </Flex>
      <Flex
        direction={"column"}
        align="flex-end"
        justify={"space-between"}
        style={{ marginRight: -12 }}
      >
        <Box className={styles.logoContainer}>
          <Image src={Logo} h={33} w={33} />
        </Box>
        <Button
          variant="transparent"
          size={"md"}
          color="#23CEFD"
          onClick={open}
        >
          <Image
            src={AddIcon}
            h={16}
            w={16}
            style={{ marginRight: 8, marginTop: 3 }}
          />
          New card
        </Button>
      </Flex>
      <Modal
        opened={opened}
        onClose={close}
        title="Add new card"
        size="xl"
        centered
      >
        <Flex
          style={{ minHeight: 150 }}
          direction="column"
          justify={"space-between"}
        >
          <Flex mt={20}>
            <Input
              placeholder="Enter Card Name"
              style={{ flex: 1 }}
              onChange={handleNameChange}
              maxLength={20}
            />
          </Flex>
          <Button color={"#01D167"} onClick={handleAddNewCard}>
            Add New Card
          </Button>
        </Flex>
      </Modal>
    </Flex>
  );
}

export default Header;
