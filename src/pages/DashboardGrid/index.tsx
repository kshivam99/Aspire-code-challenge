import React, { useState } from "react";
import { Carousel } from "@mantine/carousel";
import Card from "../../components/Card";
import Header from "../../components/Header";
import classes from "./Dashboard.module.css";
import { Box, Button, Flex, Image, Text, Modal, em } from "@mantine/core";
import CardAction from "../../components/Card-Action-Item";
import Freeze from "../../assets/freeze.svg";
import Meter from "../../assets/meter.svg";
import Gpay from "../../assets/gpay.svg";
import Replace from "../../assets/replace.svg";
import Bin from "../../assets/bin.svg";
import CardDetails from "../../components/CardDetails";
import Tabs from "../../components/Tabs";
import { CardType, useCardContext } from "../../context/CardContext";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

function DashboardGrid(): JSX.Element {
  const [visibleCard, setVisibleCard] = useState({
    id: "",
    frozen: false,
    balance: 0,
  });
  const [opened, { open, close }] = useDisclosure(false);
  const { state, dispatch } = useCardContext();
  const cards = state.cards;

  const handleSetVisibleCard = (index: number, cards: CardType[]) => {
    if (!cards.length) return;
    const { id, frozen, balance } = cards[index];
    setVisibleCard({
      id,
      frozen,
      balance,
    });
    dispatch({ type: "SET_VISIBLE_CARD", payload: id });
  };

  const freezeCard = () => {
    const { id, frozen } = visibleCard;
    const updatedFrozenState = !frozen;
    setVisibleCard((prev) => ({
      ...prev,
      frozen: updatedFrozenState,
    }));
    dispatch({
      type: updatedFrozenState ? "FREEZE_CARD" : "UNFREEZE_CARD",
      payload: id,
    });
  };

  const removeCard = () => {
    const { id } = visibleCard;
    dispatch({ type: "REMOVE_CARD", payload: id });
    const remainingCards = cards.filter((card) => card.id !== id);
    if (remainingCards.length > 0) {
      setVisibleCard({
        id: remainingCards[0].id,
        frozen: remainingCards[0].frozen,
        balance: remainingCards[0].balance,
      });
      dispatch({ type: "SET_VISIBLE_CARD", payload: remainingCards[0].id });
    } else {
      setVisibleCard({ id: "", frozen: false, balance: 0 });
      dispatch({ type: "SET_VISIBLE_CARD", payload: null });
    }
    close();
  };

  return (
    <Flex>
      <Box style={{ width: 340 }} />
      <Flex flex={1}>
        <Box className={classes.wrapper}>
          <Box className={classes.header}>
            <Box>
              <Header balance={visibleCard.balance} />
              <Tabs />
            </Box>
          </Box>
          <Flex gap={"60px"} className={classes.dashContent}>
            <Flex direction={"column"} className={classes.row1}>
              <Carousel
                classNames={classes}
                slideSize="50%"
                align={"start"}
                height={300}
                includeGapInSize={false}
                slideGap="md"
                withControls={false}
                withIndicators
                onSlideChange={(index) => handleSetVisibleCard(index, cards)}
                key={cards.length}
              >
                {cards.map((card) => (
                  <Carousel.Slide key={card.id}>
                    <Card card={card} />
                  </Carousel.Slide>
                ))}
              </Carousel>

              <Flex
                align={"center"}
                justify={"space-evenly"}
                className={classes.sliderHead}
              >
                <CardAction
                  tag={visibleCard.frozen ? "Unfreeze card" : "Freeze card"}
                  clickHandle={freezeCard}
                >
                  <Image src={Freeze} w={32} h={32} />
                </CardAction>
                <CardAction tag={"Set spend limit"}>
                  <Image src={Meter} w={32} h={32} />
                </CardAction>
                <CardAction tag={"Add to GPay"}>
                  <Image src={Gpay} w={32} h={32} />
                </CardAction>
                <CardAction tag={"Replace card"}>
                  <Image src={Replace} w={32} h={32} />
                </CardAction>
                <CardAction
                  tag={"Cancel card"}
                  clickHandle={cards.length ? open : undefined}
                >
                  <Image src={Bin} w={32} h={32} />
                </CardAction>
              </Flex>
            </Flex>
            <Flex justify={"flex-start"} className={classes.row2}>
              <CardDetails />
            </Flex>
          </Flex>
          <Modal
            opened={opened}
            onClose={close}
            title="Delete card"
            size="md"
            centered
          >
            <Flex
              style={{ minHeight: 150 }}
              direction="column"
              justify={"space-between"}
            >
              <Flex mt={20}>
                <Text fw={700} c="red">
                  Confirm deletion of Card
                </Text>
              </Flex>
              <Button color={"red"} onClick={removeCard}>
                Delete
              </Button>
            </Flex>
          </Modal>
        </Box>
      </Flex>
    </Flex>
  );
}

export default DashboardGrid;
