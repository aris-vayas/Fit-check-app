import React from "react";
import { useState, useEffect } from "react";
import { Box, Toolbar, Typography } from "@mui/material";
import Masonry from "@mui/lab/Masonry";

function UserProfLanding({ loggedUser, myPics }) {
  function handleClick(event) {
    console.log("delete");
  }
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
          AllFits
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
          {myPics.map((item, index) => (
            <div key={index}>
              <img
                onClick={handleClick}
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
