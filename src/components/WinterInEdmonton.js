import { GregAndPlamen, EdmontonCoronavirus } from "../images";
import Tile from "./Tile";

function WinterInEdmonton() {
  return (
    <Tile
      firstPicture={EdmontonCoronavirus}
      firstWidth="36%"
      secondPicture={GregAndPlamen}
      secondWidth="64%"
      title="Summer Turns to Winter"
      description="
        Unfortunately, Summer doesn't last forever, and Winter in Edmonton gets really cold.
        But that doesn't stop us for doing a MacDonald's or KFC run!
        At the very least, the cups of coffee your dad and I share warm us up and feed our caffeine addiction.
      "
    />
  );
}

export default WinterInEdmonton;
