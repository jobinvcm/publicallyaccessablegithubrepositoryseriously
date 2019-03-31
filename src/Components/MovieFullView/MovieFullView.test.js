import React from 'react';
import { shallow } from 'enzyme';
import MovieFullView from '.';
import Paper from '@material-ui/core/Paper';
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";

describe('<MovieFullView />', () => {
  it('renders paper component', () => {
    const wrapper = shallow(<MovieFullView />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have query method', () => {
      const wrapper = shallow(<MovieFullView />);
      const movieView = wrapper.instance();
      console.log(movieView.buildQuery);
  })
});
