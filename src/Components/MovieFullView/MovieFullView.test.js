import React from 'react';
import { shallow } from 'enzyme';
import MovieFullView from '.';

describe('<MovieFullView />', () => {
  it('renders paper component', () => {
    const wrapper = shallow(<MovieFullView />);
    expect(wrapper).toMatchSnapshot();
  });
});
