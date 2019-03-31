import React from 'react';
import { shallow } from 'enzyme';
import RatingDisplay from '.';

describe('<RatingDisplay />', () => {
  it('renders RatingDisplay component', () => {
    const wrapper = shallow(<RatingDisplay rating={3.5} />);
    expect(wrapper).toMatchSnapshot();
  });
});
