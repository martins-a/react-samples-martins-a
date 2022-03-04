import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

import { getMonsters } from "./services/monsterService";
import MonsterCard from "./components/MonsterCard";

function App() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetchMonsters();

    console.log("heres");
  }, []);

  const fetchMonsters = async () => {
    const monsters = await getMonsters();
    console.log(monsters);
    setMonsters(monsters);
  };

  return (
    <div className="App">
      <div className="grid-container">
        {monsters.map((monster) => (
          <MonsterCard name={monster.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
