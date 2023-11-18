import { Avatar, Box, IconButton, Link, Text } from "@primer/react";
import { MdMoreVert } from "react-icons/md";

const VideoCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingBlock: "2em",
        gap: "0.7em",
      }}
    >
      <Avatar
        src={"https://avatars.githubusercontent.com/u/92997159?v=4"}
        square={"true"}
        sx={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
          objectPosition: "center",
          borderRadius: "1em",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            borderRadius: "0",
          },
        }}
      />
      <Box
        sx={{
          display: "flex",
          gap: "1em",
        }}
      >
        <Link href="/dsfjk">
          <Avatar
            src={"https://avatars.githubusercontent.com/u/92997159?v=4"}
            sx={{
              width: "3em",
              height: "3em",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Link>
        <Box
          sx={{
            flex: "1",
            wordBreak: "break-word",
            textAlign: "justify",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "1em",
              justifyContent: "space-between",
              alignItems: "start",
            }}
          >
            <Link
              href="/sdf"
              sx={{
                fontWeight: "700",
                fontSize: "1.2em",
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "none",
                },
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </Link>
            <IconButton
              icon={MdMoreVert}
              variant="invisible"
              sx={{
                borderRadius: "100%",
                fontSize: "1.5em",
                padding: "0.5em",
              }}
            />
          </Box>
          <Text as={"p"}>Lorem ipsum dolor sit amet</Text>
          <Text>2.8M views &#x2022; 1 month ago </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default VideoCard;
