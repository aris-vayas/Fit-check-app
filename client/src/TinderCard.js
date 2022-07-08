import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

import Button from "@mui/material/Button";

function TinderCards({ count, setCount, images }) {
  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + direction);

    fetch("/count")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  };
  const outOfFrame = (name) => {
    console.log(name + "left the screen!");
  };
  console.log("intinder card", count);
  return (
    <>
      <div className="tindercards cardContent">
        <div className="tinderCards__cardContainer">
          {images.map((image, index) => (
            <TinderCard
              className="swipe"
              key={index}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir)}
              onCardLeftScreen={() => outOfFrame()}
            >
              <div
                style={{ backgroundImage: `url(${image.image})` }}
                className="card"
              >
                <Button>Vote</Button>
              </div>
              <div></div>
            </TinderCard>
          ))}
        </div>
      </div>
    </>
  );
}
export default TinderCards;
