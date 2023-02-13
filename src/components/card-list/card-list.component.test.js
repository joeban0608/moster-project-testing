import { shallow, mount, render } from "enzyme";
import React from "react";
import CardList from "./card-list.component";

const mockMonsters = [
  {
    id: 10,
    name: "Clementina DuBuque",
    email: "Rey.Padberg@karina.biz",
  },
  {
    id: 11,
    name: "Joe",
    email: "Joe@karina.biz",
  },
];

it("is render CardList component", () => {
  // expect(shallow(<Card monster={mockMonster} />).length).toEqual(1)
  expect(shallow(<CardList monsters={mockMonsters} />)).toMatchSnapshot();
});
