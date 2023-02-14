import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";
import CounterButton from "./components/counter-button/counter-button.component";
import CounterButton2 from "./components/counter-button/counter-button-2-component";
import { useSelector, useDispatch } from "react-redux";
import { requestRobots, setSearchField } from "./action/action";

const App = () => {
  const dispatch = useDispatch();
  const { robots } = useSelector((state) => state.requestRobots);
  const [filteredMonsters, setFilterMonsters] = useState(robots);
  const { searchField } = useSelector((state) => state.searchRobots);

  useEffect(() => {
    const onRequestMonsters = () => {
      dispatch(requestRobots());
    };
    onRequestMonsters();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = robots.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters);
  }, [robots, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    dispatch(setSearchField(searchFieldString));
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <CounterButton />
      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
