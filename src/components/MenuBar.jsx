import { Box, Link, NavList, Text } from "@primer/react";
import { MdOutlineHome, MdOutlineSubscriptions, MdShower } from "react-icons/md";
import NavLink from "./NavLink";

const MenuBar = ({ isMobile }) => {
  const NavLinks = {
    group_1: [
      {
        link: "/",
        ariaLabel: "home-link",
        icon: <MdOutlineHome />,
        text: "Home",
      },
      {
        link: "/shorts",
        ariaLabel: "shorts-link",
        icon: <MdShower />,
        text: "Shorts",
      },
      {
        link: "/subscriptions",
        ariaLabel: "subscriptions-link",
        icon: <MdOutlineSubscriptions />,
        text: "Subscriptions",
      },
    ],
    group_2: [
      {
        link: "/",
        ariaLabel: "home-link",
        icon: <MdOutlineHome />,
        text: "Home",
      },
      {
        link: "/shorts",
        ariaLabel: "shorts-link",
        icon: <MdShower />,
        text: "Shorts",
      },
      {
        link: "/subscriptions",
        ariaLabel: "subscriptions-link",
        icon: <MdOutlineSubscriptions />,
        text: "Subscriptions",
      },
    ],
    group_3: [
      {
        link: "/",
        ariaLabel: "home-link",
        icon: <MdOutlineHome />,
        text: "Home",
      },
      {
        link: "/shorts",
        ariaLabel: "shorts-link",
        icon: <MdShower />,
        text: "Shorts",
      },
      {
        link: "/subscriptions",
        ariaLabel: "subscriptions-link",
        icon: <MdOutlineSubscriptions />,
        text: "Subscriptions",
      },
    ],
  };

  return (
    <>
      {isMobile ? (
        <NavList>
          <Link href="/" aria-current="location" aria-label="home">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "1.5em",
                fontSize: "10px",
                textDecoration: "none",
                color: "#000",

                "&:hover": {
                  backgroundColor: "#f5f5f5",
                  cursor: "pointer",
                  borderRadius: "5px",
                  transition: "0.2s ease-in-out",
                },
              }}
            >
              <NavList.LeadingVisual>
                <MdOutlineHome size={24} />
              </NavList.LeadingVisual>
              Home
            </Box>
          </Link>
          <Link href="/shorts" aria-current="location" aria-label="shorts">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "1.5em",
                fontSize: "10px",
                textDecoration: "none",
                color: "#000",

                "&:hover": {
                  backgroundColor: "#f5f5f5",
                  cursor: "pointer",
                  borderRadius: "5px",
                  transition: "0.2s ease-in-out",
                },
              }}
            >
              <NavList.LeadingVisual>
                <MdShower size={24} />
              </NavList.LeadingVisual>
              Shorts
            </Box>
          </Link>
          <Link
            href="/subscriptions"
            aria-current="location"
            aria-label="subscriptions"
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "1.5em",
                fontSize: "10px",
                textDecoration: "none",
                color: "#000",

                "&:hover": {
                  backgroundColor: "#f5f5f5",
                  cursor: "pointer",
                  borderRadius: "5px",
                  transition: "0.2s ease-in-out",
                },
              }}
            >
              <NavList.LeadingVisual>
                <MdOutlineSubscriptions size={24} />
              </NavList.LeadingVisual>
              Subscriptions
            </Box>
          </Link>
          <Link
            href="/library"
            aria-current="location"
            aria-label="your-library"
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "1.5em",
                fontSize: "10px",
                textDecoration: "none",
                color: "#000",

                "&:hover": {
                  backgroundColor: "#f5f5f5",
                  cursor: "pointer",
                  borderRadius: "5px",
                  transition: "0.2s ease-in-out",
                },
              }}
            >
              <NavList.LeadingVisual>
                <MdOutlineSubscriptions size={24} />
              </NavList.LeadingVisual>
              You
            </Box>
          </Link>
        </NavList>
      ) : (
        <NavList sx={{
          width:"max-content"
        }} >
          <NavList.Group>
            {NavLinks.group_1.map((item) => (
              <NavLink key={item.text} item={item} />
            ))}
          </NavList.Group>
          <NavList.Group>
            <Text
              as={"h4"}
              sx={{
                marginBlock: "1em",
              }}
            >
              You
            </Text>
            {NavLinks.group_2.map((item) => (
              <NavLink key={item.text} item={item} />
            ))}
          </NavList.Group>
          <NavList.Group>
            <Text
              as={"h4"}
              sx={{
                marginBlock: "1em",
              }}
            >
              Subscriptions
            </Text>
            {NavLinks.group_2.map((item) => (
              <NavLink key={item.text} item={item} />
            ))}
          </NavList.Group>
          <NavList.Group>
            <Text
              as={"h4"}
              sx={{
                marginBlock: "1em",
              }}
            >
              Explore
            </Text>
            {NavLinks.group_2.map((item) => (
              <NavLink key={item.text} item={item} />
            ))}
          </NavList.Group>
          <NavList.Group>
            <Text
              as={"h4"}
              sx={{
                marginBlock: "1em",
              }}
            >
              More from YouTube
            </Text>
            {NavLinks.group_2.map((item) => (
              <NavLink key={item.text} item={item} />
            ))}
          </NavList.Group>
          <NavList.Group>
            {NavLinks.group_2.map((item) => (
              <NavLink key={item.text} item={item} />
            ))}
          </NavList.Group>
          <NavList.Group></NavList.Group>
        </NavList>
      )}
    </>
  );
};

export default MenuBar;
