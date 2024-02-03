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
  em,
} from "@mantine/core";
import styles from "./Header.module.css";
import AddIcon from "../../assets/add.svg";
import AddWhiteIcon from "../../assets/add-white.svg";
import Logo from "../../assets/logo.svg";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { useCardContext } from "../../context/CardContext";

interface HeaderProps {
  balance: number;
}

function Header({ balance }: HeaderProps): JSX.Element {
  const isMobile = useMediaQuery(`(max-width: ${em(1059)})`);
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
          c={isMobile ? "white" : "#222222"}
          style={{ marginTop: 20 }}
        >
          {isMobile ? "Account" : "Available"} Balance
        </Text>
        <Flex align="center" gap="xs">
          <Center className={styles.balanceTag}>
            <Text fw={500}>S$</Text>
          </Center>
          <Text
            className={styles.balanceAmount}
            fw={700}
            c={isMobile ? "white" : "#222222"}
          >
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
        <Box
          className={styles.logoContainer}
          style={{ visibility: isMobile ? "visible" : "hidden" }}
        >
          <Image src={Logo} h={33} w={33} />
        </Box>
        <Button
          variant={isMobile ? "transparent" : "filled"}
          size={"md"}
          color={isMobile ? "#23CEFD" : "#325BAF"}
          onClick={open}
        >
          <Image
            src={isMobile ? AddIcon : AddWhiteIcon}
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
        size={isMobile ? "xl" : "md"}
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
