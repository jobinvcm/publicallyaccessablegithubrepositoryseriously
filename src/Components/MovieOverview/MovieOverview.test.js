import React from 'react';
import { shallow } from 'enzyme';
import MovieOverview from '.';
import Paper from '@material-ui/core/Paper';

const mockItem = {
  title: "test title",
  release_date: "December 2016",
  imageUrl: "http://testimage",
  vote_average: 4.5
}

describe('<MovieOverview />', () => {
  it('renders paper component', () => {
    const wrapper = shallow(<MovieOverview item={mockItem}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have page element', () => {
    const wrapper =shallow(<MovieOverview item={mockItem} />);
    expect(wrapper.dive().find(Paper)).toHaveLength(1);
  });
})
