import React, { useEffect, useState } from "react";
import CardList from "../card-list/card-list.component";
import CounterButton from "../counter-button/counter-button.component";
import SearchBox from "../search-box/search-box.component";
import "./MainPage.css";

const MainPage = ({ ...props }) => {
  const { robots, searchField, onSearchChange, onRequestMonsters } = props;
  const [filteredMonsters, setFilterMonsters] = useState(robots);
  useEffect(() => {
    onRequestMonsters();
  }, []);

  const handleSetFilterMonsters = () => {
    const newFilteredMonsters = robots.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters);
  };

  useEffect(() => {
    handleSetFilterMonsters();
  }, [robots, searchField]);

  return (
    <div className="main">
      <h1 className="main-title">Monsters Rolodex</h1>
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

export default MainPage;
