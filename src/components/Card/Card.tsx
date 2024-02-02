import React, { useState } from "react";
import { Box, Flex, Image, Text } from "@mantine/core";
import styles from "./Card.module.css";
import Preview from "../../assets/preview.svg";
import Visa from "../../assets/visa.svg";
import Logo from "../../assets/aspire.png";

function Card(): JSX.Element {
  const [cardSeen, setCardSeen] = useState(false);
  const hiddenCardData = ["⚈⚈⚈⚈", "⚈⚈⚈⚈", "⚈⚈⚈⚈", "1234"];

  const toggleCardSeen = () => {
    setCardSeen((prev) => !prev);
  };

  return (
    <Box className={styles.wrapper}>
      <Flex className={styles.badge} gap="4px" onClick={toggleCardSeen}>
        <Image src={Preview} h={16} w={16} />
        <Text size={"xs"} c="#01D167" fw={500}>
          {cardSeen ? "Hide" : "Show"} card number
        </Text>
      </Flex>
      <Box className={styles.container}>
        <Flex justify={"space-between"}>
          <Box />
          <Image src={Logo} h={21} w={74} />
        </Flex>
        <Flex justify={"space-between"} mt={24}>
          <Text size={"22px"} c="#fff" fw={700}>
            Mark Henry
          </Text>
          <Box />
        </Flex>
        <Flex mt={24}>
          {(!cardSeen ? hiddenCardData : ["1234", "3454", "6534", "1234"]).map(
            (str) => {
              return (
                <Box mr={24} style={{width: 42 }}>
                  <Text size={"14px"} c="#fff" fw={700}>
                    {str}
                  </Text>
                </Box>
              );
            }
          )}
        </Flex>
        <Flex mt={12} gap='30px'>
          <Text size={"sm"} c="#fff" fw={600}>
            Thru: 12/20
          </Text>
          <Text size={"sm"} c="#fff" fw={600}>
            CVV: ***
          </Text>
        </Flex>
        <Flex justify={"space-between"} mt={10}>
          <Box />
          <Image src={Visa} h={21} w={74} />
        </Flex>
      </Box>
    </Box>
  );
}

export default Card;
