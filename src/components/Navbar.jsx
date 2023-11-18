import {
  Box,
  IconButton,
  Text,
  TextInput,
  Tooltip,
  Avatar,
} from "@primer/react";
import {
  MdMenu,
  MdSearch,
  MdMic,
  MdOutlineVideoCall,
  MdOutlineNotifications,
} from "react-icons/md";

const Navbar = ({ isMobile, setIsMobile }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        position: "sticky",
        top: "0",
        zIndex: "2",
        backgroundColor: "#fff",
      }}
    >
      <Box sx={{ display: "flex", columnGap: "2", alignItems: "center" }}>
        <IconButton
          icon={MdMenu}
          aria-level="menu"
          sx={{
            borderRadius: "100%",
            fontSize: "1.5em",
            "@media only screen and (max-width:780px)": {
              display:"none"
            },
          }}
          size="large"
          variant="invisible"
          onClick={() => setIsMobile(!isMobile)}
        />
        <Text as="h3">YouTube</Text>
      </Box>
      <Box sx={{ display: "flex", columnGap: "5", alignItems: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center", flex: "1" }}>
          <TextInput
            aria-label="search-box"
            name="search-query"
            placeholder="Search"
            size="large"
            sx={{
              borderRadius: "25px 0 0 25px",
              width: "20rem",
              outline: "none",
              "&:focus ": {
                outline: "none",
                border: "0",
              },
            }}
          />
          <Tooltip aria-label="Search" direction="s">
            <IconButton
              icon={MdSearch}
              aria-label="search-button"
              sx={{
                paddingInline: "25px",
                border: "0",
                color: "#fff",
                background: "#000",
                borderRadius: "0 25px 25px 0",
              }}
              size="large"
            />
          </Tooltip>
        </Box>
        <Tooltip aria-label="Search with your voice" direction="s">
          <IconButton
            icon={MdMic}
            aria-label="mic"
            sx={{
              borderRadius: "100%",
              fontSize: "1.5em",
              backgroundColor: "#fff",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#eee",
              },
            }}
            size="large"
          />
        </Tooltip>
      </Box>
      <Box sx={{ display: "flex", columnGap: "2", alignItems: "center" }}>
        <Tooltip aria-label="Create" direction="s">
          <IconButton
            icon={MdOutlineVideoCall}
            aria-label="create-video"
            sx={{
              borderRadius: "100%",
              fontSize: "1.5em",
              backgroundColor: "transparent",
              border: "0",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#eee",
              },
            }}
            size="large"
          />
        </Tooltip>
        <Tooltip aria-label="Notifications" direction="s">
          <IconButton
            icon={MdOutlineNotifications}
            aria-label="notifications"
            sx={{
              borderRadius: "100%",
              fontSize: "1.5em",
              backgroundColor: "transparent",
              border: "0",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#eee",
              },
            }}
            size="large"
          />
        </Tooltip>
        <Avatar
          src="https://avatars.githubusercontent.com/u/92997159?v=4"
          sx={{
            width: "40px",
            height: "40px",
            borderRadius: "100%",
            border: "1px solid #000",
            objectFit: "cover",
            objectPosition: "center",
            backgroundColor: "#fff",
            cursor: "pointer",
          }}
        />
      </Box>
    </Box>
  );
};

export default Navbar;
