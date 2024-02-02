import React from "react";
import { Box, Center, Divider, em, Flex, Image, Text } from "@mantine/core";
import CardIcon from "../../assets/card.svg";
import DownArrow from "../../assets/downarrow.svg";
import UpArrow from "../../assets/up-arrow.svg";
import Transactions from "../../assets/transaction.svg";
import FileStorage from "../../assets/file-storage.svg";
import Next from "../../assets/next.svg";
import classes from "./CardDetails.module.css";
import { useMediaQuery } from "@mantine/hooks";

function CardDetails() {
  const isMobile = useMediaQuery(`(max-width: ${em(600)})`);

  return (
    <Flex direction={"column"} gap="24px">
      <Flex
        justify={"space-between"}
        align="center"
        className={classes.accordionHeader}
      >
        <Flex gap="12px">
          <Image src={CardIcon} h={24} w={24} />
          <Text>Card details</Text>
        </Flex>
        <Image src={DownArrow} h={20} w={20} />
      </Flex>
      <Box>
        <Flex
          justify={"space-between"}
          align="center"
          className={classes.accordionHeader}
        >
          <Flex gap="12px">
            <Image src={Transactions} h={24} w={24} />
            <Text>Recent Transactions</Text>
          </Flex>
          <Image src={UpArrow} h={20} w={20} />
        </Flex>
        <Flex direction={"column"} className={classes.accordionBody}>
          <Flex align="flex-start" gap="16px" className={classes.contentRow}>
            <Center
              style={{
                background: "#009DFF1A",
                height: 48,
                width: 48,
                borderRadius: 24,
              }}
            >
              <Image src={FileStorage} h={16} w={16} />
            </Center>
            <Flex direction={"column"} gap="10px">
              <Text size="14px" fw={600}>
                Hamleys
              </Text>
              <Text c={"#AAAAAA"}>20 May 2020</Text>
              <Text c={"#325BAF"} fw={500}>
                Refund on debit card
              </Text>
            </Flex>
            <Flex align={"center"} gap="8px">
              <Text fw={700}>+S$ 150</Text>
              <Image src={Next} h={12} w={7} />
            </Flex>
          </Flex>
          <Divider my="md" />
          <Flex align="flex-start" gap="16px" className={classes.contentRow}>
            <Center
              style={{
                background: "#009DFF1A",
                height: 48,
                width: 48,
                borderRadius: 24,
              }}
            >
              <Image src={FileStorage} h={16} w={16} />
            </Center>
            <Flex direction={"column"} gap="10px">
              <Text size="14px" fw={600}>
                Hamleys
              </Text>
              <Text c={"#AAAAAA"}>20 May 2020</Text>
              <Text c={"#325BAF"} fw={500}>
                Refund on debit card
              </Text>
            </Flex>
            <Flex align={"center"} gap="8px">
              <Text fw={700}>+S$ 150</Text>
              <Image src={Next} h={12} w={7} />
            </Flex>
          </Flex>
          <Divider my="md" />
          <Flex align="flex-start" gap="16px" className={classes.contentRow}>
            <Center
              style={{
                background: "#009DFF1A",
                height: 48,
                width: 48,
                borderRadius: 24,
              }}
            >
              <Image src={FileStorage} h={16} w={16} />
            </Center>
            <Flex direction={"column"} gap="10px">
              <Text size="14px" fw={600}>
                Hamleys
              </Text>
              <Text c={"#AAAAAA"}>20 May 2020</Text>
              <Text c={"#325BAF"} fw={500}>
                Refund on debit card
              </Text>
            </Flex>
            <Flex align={"center"} gap="8px">
              <Text fw={700}>+S$ 150</Text>
              <Image src={Next} h={12} w={7} />
            </Flex>
          </Flex>
          <Divider my="md" />
          <Flex align="flex-start" gap="16px" className={classes.contentRow}>
            <Center
              style={{
                background: "#009DFF1A",
                height: 48,
                width: 48,
                borderRadius: 24,
              }}
            >
              <Image src={FileStorage} h={16} w={16} />
            </Center>
            <Flex direction={"column"} gap="10px">
              <Text size="14px" fw={600}>
                Hamleys
              </Text>
              <Text c={"#AAAAAA"}>20 May 2020</Text>
              <Text c={"#325BAF"} fw={500}>
                Refund on debit card
              </Text>
            </Flex>
            <Flex align={"center"} gap="8px">
              <Text fw={700}>+S$ 150</Text>
              <Image src={Next} h={12} w={7} />
            </Flex>
          </Flex>
        </Flex>
        <Center className={classes.footer}>
          <Text c={"#01D167"} fw={500}>
            View all card transactions
          </Text>
        </Center>
      </Box>
      {isMobile && <Box style={{ height: 60 }} />}
    </Flex>
  );
}

export default CardDetails;
