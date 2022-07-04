import TinderCard from "react-tinder-card";
import FitCard from "./FitCard";
// ...
function Card(options) {
  const onSwipe = (direction) => {
    if (direction === "left") {
      console.log("You swiped: no like ");
    } else if (direction === "right") {
      console.log("You swiped: like ");
    }
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };

  return (
    <TinderCard
      onSwipe={onSwipe}
      onCardLeftScreen={() => onCardLeftScreen("bob")}
      preventSwipe={["up", "down"]}
    >
      <FitCard />
    </TinderCard>
  );
}

export default Card;
