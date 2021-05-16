import React from "react";
import { shallow } from "enzyme";
import Layout from "../Layout";

describe("Layout testing", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<Layout />);
  });

  it("render correctly", () => {});
});
