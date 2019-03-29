import React from 'react';
import { shallow } from 'enzyme';
import MovieOverview from '.';
import { isMainThread } from 'worker_threads';
import Paper from '@material-ui/core/Paper';
import { ExpansionPanelActions } from '@material-ui/core';

const mockItem = {
  title: "test title",
  year: "December 2016",
  imageUrl: "http://testimage"
}

describe('<MovieOverview />', () => {
  it('renders paper component', () => {
    const wrapper = shallow(<MovieOverview item={mockItem}/>);
    expect(wrapper).toMatchSnapshot();
  })

  it('should have page elemnt', () => {
    const wrapper =shallow(<MovieOverview item={mockItem} />);
    expect(wrapper.find(Paper)).toHaveLength(1);
  })
})