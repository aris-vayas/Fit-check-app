import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

import Button from "@mui/material/Button";
import { PostAdd } from "@material-ui/icons";
let scoreObj = {};
function TinderCards({ count, setCount, images }) {
  const [score, setScore] = useState(0);

  const swiped = (direction, image) => {
    if (direction === "left") {
      console.log("left");
      scoreObj = {
        score: false,
      };
    } else {
      console.log("right");
      scoreObj = {
        score: true,
      };
    }

    console.log(image.id);
    fetch(`/photos/${image.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(scoreObj),
    }).then((data) => console.log(data));

    fetch("/count")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  };

  return (
    <>
      <div className="tindercards cardContent">
        <div className="tinderCards__cardContainer">
          {images.map((image, index) => (
            <TinderCard
              className="swipe"
              key={index}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, image)}
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
