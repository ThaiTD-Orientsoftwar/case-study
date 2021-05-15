import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Counter from "../../Counter";

let container = null;

// test("it renders the button", () => {
//   render(<Button label="Click me" />);

//   const button = screen.getByRole("button", { name: /click me/i });

//   expect(button).toBeInTheDocument();
// });
