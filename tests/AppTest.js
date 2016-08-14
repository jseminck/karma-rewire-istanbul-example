import React from "react";
import { shallow } from 'enzyme';
import App from './../src/App';

describe("App", function() {
  it("contains h1 tag", function() {
    const wrapper = shallow(<App />);
    expect(wrapper.find("h1").length).toEqual(1);
  });
});
