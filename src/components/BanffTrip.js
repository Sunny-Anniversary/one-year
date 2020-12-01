import { BanffMountain, HikingInBanff } from "../images";
import Tile from "./Tile";

function BanffTrip() {
  return (
    <Tile
      firstPicture={BanffMountain}
      secondPicture={HikingInBanff}
      title="Exploring Alberta"
      description="
        We were reunited once again in Edmonton!
        But after several weeks of 'I need a vacation', we packed our snacky-snacks (Gushers, mostly), and with a playlist of great tunes, set out to see Banff and Lake Louise.
        On one of the days, we hiked over four hours to get to a beautiful lake around the mountain range.
      "
    />
  );
}

export default BanffTrip;
