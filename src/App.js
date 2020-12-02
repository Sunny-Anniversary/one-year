import Header from "./components/Header";
import Intro from "./components/Intro";
import TheBeginning from "./components/TheBeginning";
import TheFirstMonths from "./components/TheFirstMonths";

import "./App.css";
import React from "react";
import CoronavirusTime from "./components/CoronavirusTime";
import BanffTrip from "./components/BanffTrip";
import WinterInEdmonton from "./components/WinterInEdmonton";
import LookingAhead from "./components/LookingAhead";
import Present from "./components/Present";
import Spinner from "./components/Spinner";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const Cube = React.lazy(() => import("./cube/CubeApp"));

  return (
    <React.Suspense fallback={<Spinner />}>
      <Router>
        <Switch>
          <Route path="/present">
            <Cube />
          </Route>
          <Route path={["/one-year", "/"]}>
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
          </Route>
        </Switch>
      </Router>
    </React.Suspense>
  );
}

export default App;
