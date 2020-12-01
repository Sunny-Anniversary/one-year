import { Flirting, ChristmasLastYear } from "../images";
import Tile from "./Tile";

function TheBeginning() {
  return (
    <Tile
      title="In the Beginning..."
      firstPicture={Flirting}
      secondPicture={ChristmasLastYear}
      description="The year was 2019 in the Dunbar House, and two roommates began to have
      feelings for each other. It began with late night chats in the living
  room or basement, but quickly blossomed into something more. After a few
  weeks of flirting, we decided to give it a go. And we haven't looked
  back since."
    />
  );
}

export default TheBeginning;
