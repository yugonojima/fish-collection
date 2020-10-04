import React, { useState } from "react";
import "./App.css";
import { Creature } from "./types/creature";
import { CreaturesContext } from "./Context/CreatureContext";
import { Route, Switch } from "react-router-dom";
// Screen
import HomeScreen from "./Screens/HomeScreen";
import CreatureScreen from "./Screens/CreatureScreen";
const App = () => {
  const [creatures, setCreatures] = useState<Creature[]>([]);

  return (
    <CreaturesContext.Provider value={{ creatures, setCreatures }}>
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>
        <Route path="/creature">
          <CreatureScreen />
        </Route>
      </Switch>
    </CreaturesContext.Provider>
  );
};

export default App;
