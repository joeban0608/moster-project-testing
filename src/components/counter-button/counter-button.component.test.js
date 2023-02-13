import { shallow, mount, render } from "enzyme";
import React from "react";
import CounterButton from "./counter-button.component";

it("is render CounterButton component", () => {
  const mockColor = "red";
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it("correct increment add counter", () => {
  const mockColor = "red";
  const wrapper = shallow(<CounterButton color={mockColor} />);
  wrapper.find(`[id="counter"]`).simulate("click");
  wrapper.find(`[id="counter"]`).simulate("click");
  // console.log(wrapper.state())
  expect(wrapper.state()).toEqual({ count: 2 });
  wrapper.find(`[id="counter"]`).simulate("click");
  expect(wrapper.state()).toEqual({ count: 3 });
  wrapper.find(`[id="counter"]`).simulate("keyPress");
  expect(wrapper.state()).toEqual({ count: 3 });
  expect(wrapper.props().color).toEqual("red");
});
