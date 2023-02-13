import { shallow, mount, render } from "enzyme";
import React from "react";
import Card from "./card.component";
const mockMonster = {
  id: 10,
  name: "Clementina DuBuque",
  email: "Rey.Padberg@karina.biz",
};

it('is render Card component', ()=>{
  expect(shallow(<Card monster={mockMonster} />).length).toEqual(1)
})
