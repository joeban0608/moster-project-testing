import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { setRequestRobots, setSearchField } from "./action/actions";
import MainPage from "./components/MainPage/MainPage";

const App = () => {
  const dispatch = useDispatch();
  const { robots } = useSelector((state) => state.requestRobots);
  const { searchField } = useSelector((state) => state.searchRobots);

  const onRequestMonsters = () => {
    dispatch(setRequestRobots());
  };

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    dispatch(setSearchField(searchFieldString));
  };
  return (
    <MainPage
      robots={robots}
      searchField={searchField}
      onSearchChange={onSearchChange}
      onRequestMonsters={onRequestMonsters}
    />
  );
};

export default App;
