import React from 'react';
import { shallow } from 'enzyme';
import ImageFetch from './imageLoad';

const imageUrl = "scVLRx5GWyznYoBMUo8aXxgLot9.jpg";

describe('<ImageLoad />', () => {
  it('renders ImageLoad component', () => {
    const wrapper = shallow(<ImageFetch imageUrl={imageUrl} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Give proper breakpoint image', () => {
    const wrapper = shallow(<ImageFetch imageUrl={imageUrl} width="xs" />);
    expect(wrapper.html()).toEqual('<img alt="Background Image" class="imageFetch-root-1" src="https://image.tmdb.org/t/p/w300/scVLRx5GWyznYoBMUo8aXxgLot9.jpg"/>');
  });
})
