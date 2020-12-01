import { TakingCareOfFlowers, SunnyArtFacetime } from "../images";
import Tile from "./Tile";

function CoronavirusTime() {
  return (
    <Tile
      title="But then ... Corona"
      firstPicture={TakingCareOfFlowers}
      secondPicture={SunnyArtFacetime}
      firstWidth="57.15%"
      secondWidth="42.85%"
      description="In the beginning of Spring, the world decided to hit us with a once-in-a-century global pandemic.
      We found ourselves a province apart, making the best of the situation over Facetime.
      Sometimes, we played games to pass the time: Text Adventures, Chess, even a Sketch Drawing app.
      But I knew that I wanted to spend my Summer with a Sunny."
    />
  );
}

export default CoronavirusTime;
