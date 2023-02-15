import { shallow, mount } from "enzyme";
import React from "react";
import CardList from "../card-list/card-list.component";
import SearchBox from "../search-box/search-box.component";
import MainPage from "./MainPage";

export const mockRobots = [
  {
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    email: "Shanna@melissa.tv",
    name: "Ervin Howell",
  },
];
let wrapper;
beforeEach(() => {
  const mockProps = {
    robots: [],
    searchField: "",
    onRequestMonsters: jest.fn(),
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it("is render MainPage component", () => {
  // expect(shallow(<Card monster={mockMonster} />).length).toEqual(1)
  expect(wrapper).toMatchSnapshot();
});

it("filters Robots correctly", () => {
  const mockProps2 = {
    robots: mockRobots,
    searchField: "",
    onRequestMonsters: jest.fn(),
  };
  wrapper = shallow(<MainPage {...mockProps2} />);
  const cardList = wrapper.find(CardList);
  // expect(cardList.prop("monsters")).toEqual([]);
  expect(cardList.prop("monsters")).toEqual(mockRobots);
});

it("searchBox is correctly", () => {
  const mockProps3 = {
    robots: mockRobots,
    searchField: "ervin",
    onSearchChange: jest.fn(),
    onRequestMonsters: jest.fn(),
  };
  wrapper = mount(<MainPage {...mockProps3} />);
  const cardList = wrapper.find(CardList);

  expect(cardList.prop("monsters")).toEqual([
    {
      id: 2,
      email: "Shanna@melissa.tv",
      name: "Ervin Howell",
    },
  ]);
});
