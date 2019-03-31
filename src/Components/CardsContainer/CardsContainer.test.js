import React from 'react';
import { shallow } from 'enzyme';
import CardsContainer from '.';

const data = {
  0: {
    title: "test title",
    release_date: "December 2016",
    imageUrl: "http://testimage",
    vote_average: 4.5
  }
}

describe('<CardsContainer />', () => {
  it('renders CardsContainer component', () => {
    const wrapper = shallow(<CardsContainer data={data}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
