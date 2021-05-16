import React from "react";
import { shallow, render } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Counter from "../Counter";
import TableList from "../TableList";
import withLayout from "../../components/Layout";

describe("Layout testing", () => {
  let wrapper: any;
  it("renders Counter with '/' ", () => {
    wrapper = shallow(
      <MemoryRouter initialEntries={["/"]}>
        {withLayout(<Counter />, "counter")}
      </MemoryRouter>
    );
    expect(wrapper.find(Counter)).toHaveLength(1);
  });
  it("renders TableList with '/list' ", () => {
    wrapper = shallow(
      <MemoryRouter initialEntries={["/list"]}>
        {withLayout(<TableList />, "list")}
      </MemoryRouter>
    );
    expect(wrapper.find(TableList)).toHaveLength(1);
  });
});
