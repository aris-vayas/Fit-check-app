import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";
import Masonry from "@mui/lab/Masonry";

function UserProfLanding({ photos }) {
  const sortedPhoto = photos.sort(function (a, b) {
    const nameA = a.score;
    const nameB = b.score;
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  });
  console.log(sortedPhoto);

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
          justifyContent: "center",
        }}
      >
        <Typography
          justifyContent="center"
          variant="h2"
          noWrap
          sx={{
            mr: 12,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          WurstFit
        </Typography>
      </Toolbar>
      <Box
        sx={{
          display: "flex",
          justify: "center",
          justifyContent: "center",
          alignItems: "center",
          width: "flex",
          minHeight: "flex",
        }}
      >
        <Masonry
          columns={3}
          spacing={2}
          sx={{
            display: "flex",
            justify: "center",
            justifyContent: "center",
            alignItems: "center",
            width: "flex",
            minHeight: "flex",
          }}
        >
          {sortedPhoto.map((item, index) => (
            <div key={index}>
              <img
                // onClick={handleClick}
                src={`${item.image}?w=162&auto=format`}
                srcSet={`${item.image}?w=162&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: "block",
                  width: "100%",
                }}
              ></img>
            </div>
          ))}
        </Masonry>
      </Box>
    </Box>
  );
}

export default UserProfLanding;
