import { VisitOverSummerOne, VisitOverSummerTwo } from "../images";
import Tile from "./Tile";

function LookingAhead() {
  return (
    <Tile
      firstPicture={VisitOverSummerOne}
      secondPicture={VisitOverSummerTwo}
      title="The First Year of Many"
      description="
        Looking back, I can't stop thinking about how lucky I am to be with you.
        You make me so happy Sunny, and I am grateful for every day we get to spend together.
        Thank you for being in my life - I love you Sunny Bunny!
      "
    />
  );
}

export default LookingAhead;
