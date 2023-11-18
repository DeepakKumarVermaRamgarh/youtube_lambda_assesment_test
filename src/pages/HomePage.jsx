import React from "react";
import MenuBar from "../components/MenuBar";
import { Box, Button } from "@primer/react";
import VideoCard from "../components/VideoCard";

const HomePage = ({ isMobile }) => {
  const tagsList = [
    "All",
    "Music",
    "Gaming",
    "Podcasts",
    "Live",
    "Computer Science",
  ];

  return (
    <main
      style={{
        display: "flex",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          height: "90vh",
          maxWidth: "fit-content",
          paddingInline: "1em",
          transition: "all 0.5s ease-in-out",
          overflowY: "scroll",
          "&:hover::-webkit-scrollbar-thumb": {
            backgroundColor: "#909090",
          },
        }}
      >
        <MenuBar isMobile={isMobile} />
      </Box>
      <Box
        sx={{
          flex: "1",
          height: "90vh",
          paddingInline: "1em",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            columnGap: "1em",
            paddingBottom: "1em",
          }}
        >
          {tagsList.map((tag) => (
            <Button
              key={tag}
              sx={{
                borderRadius: "5px",
              }}
              aria-label={tag}
            >
              {tag}
            </Button>
          ))}
        </Box>

        <Box
          sx={{
            display: "grid",
            paddingRight:"0.5em",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "1em",
            transition: "all 0.5s ease-in-out",
            overflowY: "scroll",
            "&:hover::-webkit-scrollbar-thumb": {
              backgroundColor: "#909090",
            },
            "@media only screen and (max-width:780px)": {
              gridTemplateColumns: "repeat(2,1fr)",
            },
            "@media only screen and (max-width:500px)": {
              gridTemplateColumns: "repeat(1,1fr)",
            },
          }}
        >
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </Box>
      </Box>
    </main>
  );
};

export default HomePage;
