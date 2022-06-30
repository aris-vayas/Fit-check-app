import TinderCard from "react-tinder-card";
import FitCard from "./FitCard";
// ...
function Card(options) {
  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
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
