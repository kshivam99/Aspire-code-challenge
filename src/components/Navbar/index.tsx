import React from "react";
import { UnstyledButton, rem, Image, em, Text, Flex } from "@mantine/core";
import classes from "./Navbar.module.css";
import Home from "../../assets/home.svg";
import Pay from "../../assets/pay.svg";
import Payments from "../../assets/payments.svg";
import Credit from "../../assets/credit.svg";
import Account from "../../assets/account.svg";
import { useMediaQuery } from "@mantine/hooks";

interface NavbarLinkProps {
  icon: any;
  label: string;
}

function NavbarLink({ icon, label }: NavbarLinkProps) {
  const isMobile = useMediaQuery(`(max-width: ${em(600)})`);
  return (
    <Flex direction={'column'} align='center'>
      <UnstyledButton className={classes.link}>
        <Image
          src={icon}
          style={{ width: rem(20), height: rem(20), objectFit: "contain" }}
        />
        {!isMobile && <Text>{label}</Text>}
      </UnstyledButton>
      <Text size='9px' fw={700} c={label === "Cards" ? "#01D167" : "#DDDDDD"}>{label}</Text>
    </Flex>
  );
}

const navbarData = [
  { icon: Home, label: "Home" },
  { icon: Pay, label: "Cards" },
  { icon: Payments, label: "Payments" },
  { icon: Credit, label: "Credit" },
  { icon: Account, label: "Profile" },
];

export function Navbar() {
  const isMobile = useMediaQuery(`(max-width: ${em(600)})`);

  const links = navbarData.map((link, index) => (
    <NavbarLink {...link} key={link.label} />
  ));

  return (
    <nav className={classes.navbar}>
      {!isMobile && (
        <UnstyledButton className={classes.link}>
          <Image
            src={Home}
            style={{ width: rem(20), height: rem(20), objectFit: "contain" }}
          />
        </UnstyledButton>
      )}

      <Flex
        direction={isMobile ? "row" : "column"}
        w="100%"
        mt={isMobile ? "0px" : "50px"}
        justify={isMobile ? "space-around" : "center"}
        className="menu"
        gap={"md"}
      >
        {links}
      </Flex>
      {!isMobile && <div />}
    </nav>
  );
}
