import React from "react";
import { Carousel } from "@mantine/carousel";
import Card from "../../components/Card/Card";
import Header from "../../components/Header";
import classes from "./Dashboard.module.css";
import { Box, Flex, Image } from "@mantine/core";
import CardAction from "../../components/Card-Action-Item";
import Freeze from "../../assets/freeze.svg";
import Meter from "../../assets/meter.svg";
import Gpay from "../../assets/gpay.svg";
import Replace from "../../assets/replace.svg";
import Bin from "../../assets/bin.svg";
import CardDetails from "../../components/CardDetails";
import Tabs from "../../components/Tabs";

function Dashboard(): JSX.Element {
  return (
    <Box className={classes.container}>
      <Box className={classes.header}>
        <Box p={24}>
          <Header balance={3000} />
          <Tabs />
        </Box>
        <Box mt={30} ml={24}>
          <Carousel
            classNames={classes}
            slideSize="90%"
            align={"start"}
            height={300}
            slideGap="md"
            withControls={false}
            withIndicators
          >
            {[1, 2, 3, 4].map((r) => (
              <Carousel.Slide>
                <Card />
              </Carousel.Slide>
            ))}
          </Carousel>
        </Box>
      </Box>
      <Flex
        align={"center"}
        justify={"space-evenly"}
        className={classes.sliderHead}
      >
        <CardAction tag={"Freeze card"}>
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
        <CardAction tag={"Cancel card"}>
          <Image src={Bin} w={32} h={32} />
        </CardAction>
      </Flex>
      <Box className={classes.sliderBody}>
        <CardDetails />
      </Box>
    </Box>
  );
}

export default Dashboard;
