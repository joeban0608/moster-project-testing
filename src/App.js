import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { requestRobots, setSearchField } from "./action/action";
import MainPage from "./components/MainPage/MainPage";

const App = () => {
  const dispatch = useDispatch();
  const { robots } = useSelector((state) => state.requestRobots);
  const { searchField } = useSelector((state) => state.searchRobots);

  const onRequestMonsters = () => {
    dispatch(requestRobots());
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
