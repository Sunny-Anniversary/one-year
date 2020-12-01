import Header from "./components/Header";
import Intro from "./components/Intro";
import TheBeginning from "./components/TheBeginning";
import TheFirstMonths from "./components/TheFirstMonths";

import "./App.css";
import CoronavirusTime from "./components/CoronavirusTime";
import BanffTrip from "./components/BanffTrip";
import WinterInEdmonton from "./components/WinterInEdmonton";
import LookingAhead from "./components/LookingAhead";
import Present from "./components/Present";

function App() {
  return (
    <div className="App">
      <Header />
      <body className="Body">
        <Intro />
        <TheBeginning />
        <TheFirstMonths />
        <CoronavirusTime />
        <BanffTrip />
        <WinterInEdmonton />
        <LookingAhead />
        <Present />
      </body>
    </div>
  );
}

export default App;
