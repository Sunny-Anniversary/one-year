import { SookeTrip, FairyBackFromSooke } from "../images";
import Tile from "./Tile";

function TheFirstMonths() {
  return (
    <Tile
      firstPicture={SookeTrip}
      secondPicture={FairyBackFromSooke}
      firstWidth="64%"
      secondWidth="36%"
      title="Falling in Love"
      description="Over the next few months, we fell in love. Whether it was bringing home
Donuts or Sushi platters after school, or having a poem read to us by
Improv commedians on Valentine's Day, or our trip to see Conor's family
in Sooke, we always found a way to make each other smile and laugh."
    />
  );
}

export default TheFirstMonths;
