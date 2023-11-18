import { NavList } from "@primer/react";
import React from "react";

const NavLink = ({ item }) => {
  const { link, ariaLabel, icon, text } = item;
  return (
    <NavList.Item
      href={link}
      aria-current="location"
      aria-label={ariaLabel}
      sx={{
        fontWeight: "900",
        fontSize: "18px",
        columnGap: "1em",
        padding: "0.6em",
        background: "transparent",
        "& svg": {
          fontSize: "2em",
        },
      }}
    >
      <NavList.LeadingVisual>{icon}</NavList.LeadingVisual>
      {text}
    </NavList.Item>
  );
};

export default NavLink;
