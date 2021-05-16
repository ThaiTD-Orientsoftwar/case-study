import React from "react";
import { shallow } from "enzyme";
import Counter from "../Counter";
import { Button } from "antd";

describe("Counter testing", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<Counter />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("includes two button", () => {
    expect(wrapper.find(Button)).toHaveLength(2);
  });

  it("renders default counter", () => {
    expect(wrapper.find("span").text()).toEqual("1");
  });

  it("renders counter + 1 on click increase", () => {
    wrapper.find("#increase").simulate("click");
    expect(wrapper.find("span").text()).toEqual("2");
  });

  it("reset counter on click reset", () => {
    wrapper.find("#increase").simulate("click");
    wrapper.find("#increase").simulate("click");
    wrapper.find("#increase").simulate("click");
    expect(wrapper.find("span").text()).toEqual("4");
    wrapper.find("#reset").simulate("click");
    expect(wrapper.find("span").text()).toEqual("1");
  });
});
