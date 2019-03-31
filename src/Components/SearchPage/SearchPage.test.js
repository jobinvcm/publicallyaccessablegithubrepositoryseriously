import React from 'react';
import { shallow } from 'enzyme';
import SearchPage from '.';
import Paper from '@material-ui/core/Paper';
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";

describe('<SearchPage />', () => {
  it('renders paper component', () => {
    const wrapper = shallow(<SearchPage />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should should have input', () => {
    const mock = jest.fn();
    const wrapper = shallow(<SearchPage onChange={mock} />);
    expect(wrapper.dive().find(InputBase)).toHaveLength(1);
  });

  it('should should have IconButton', () => {
    const wrapper = shallow(<SearchPage />);
    expect(wrapper.dive().find(Paper).find(IconButton)).toHaveLength(1);
  });

  it('should should have Search Icon', () => {
    const wrapper = shallow(<SearchPage />);
    expect(wrapper.dive().find(Paper).find(IconButton).find(SearchIcon)).toHaveLength(1);
  });

  it('should trigger onchange function', () => {
    const mock = jest.fn();
    const wrapper = shallow(<SearchPage onChange={mock} />);
    const input = wrapper.dive().find(InputBase);
    input.simulate('change', {target: { value: 'changed'}});
    expect(mock).toHaveBeenCalled();
  });  
})
