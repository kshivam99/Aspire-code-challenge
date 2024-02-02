import React from "react";
import { UnstyledButton, rem, Image, em, Text, Flex } from "@mantine/core";
import classes from "./Navbar.module.css";
import Home from "../../assets/home.svg";
import Pay from "../../assets/pay.svg";
import Payments from "../../assets/payments.svg";
import Credit from "../../assets/credit.svg";
import Account from "../../assets/account.svg";
import Logo from "../../assets/navbar-logo.svg";
import { useMediaQuery } from "@mantine/hooks";

interface NavbarLinkProps {
  icon: JSX.Element;
  label: string;
}

function NavbarLink({ icon, label }: NavbarLinkProps) {
  const isMobile = useMediaQuery(`(max-width: ${em(740)})`);
  const isCardLabel = label === "Cards";
  return (
    <Flex direction={"column"} align="center">
      <UnstyledButton className={classes.link}>
        <Image
          src={icon}
          style={{ width: rem(20), height: rem(20), objectFit: "contain" }}
        />
        {!isMobile && (
          <Text
            size="16px"
            c={isCardLabel ? "#01D167" : "#FFFFFF"}
            fw={isCardLabel ? 700 : 400}
          >
            {label}
          </Text>
        )}
      </UnstyledButton>
      {isMobile && (
        <Text size="9px" fw={700} c={isCardLabel ? "#01D167" : "#DDDDDD"}>
          {label}
        </Text>
      )}
    </Flex>
  );
}

const navbarData = [
  { icon: Home, label: "Home" },
  { icon: Pay, label: "Cards" },
  { icon: Payments, label: "Payments" },
  { icon: Credit, label: "Credit" },
  { icon: Account, label: "Settings" },
];

export function Navbar() {
  const isMobile = useMediaQuery(`(max-width: ${em(740)})`);

  const links = navbarData.map((link) => (
    <NavbarLink {...link} key={link.label} />
  ));

  return (
    <nav
      className={classes.navbar}
      style={{
        backgroundColor: isMobile ? "#FFFFFF" : "#0c365a",
        padding: isMobile ? 8 : 48
      }}
    >
      {!isMobile && (
        <Flex
          direction={"column"}
          align="flex-start"
          gap="20px"
          className={classes.link}
          style={{ marginLeft: -18 }}
        >
          <Image src={Logo} width={125} height={35} />
          <Text style={{ width: 236, lineHeight: 1.2 }} size="15px" c="#FFFFFF" opacity={0.3}>
            Trusted way of banking for 3,000+ SMEs and startups in Singapore
          </Text>
        </Flex>
      )}

      <Flex
        direction={isMobile ? "row" : "column"}
        w="100%"
        mt={isMobile ? "0px" : "120px"}
        justify={isMobile ? "space-around" : "center"}
        align="flex-start"
        className="menu"
        gap={isMobile ? "40px" : "22px"}
      >
        {links}
      </Flex>
      {!isMobile && <div />}
    </nav>
  );
}
