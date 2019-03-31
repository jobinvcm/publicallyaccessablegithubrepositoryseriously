import React from 'react';
import { shallow, mount} from 'enzyme';
import RatingDisplay from '.';

describe('<RatingDisplay />', () => {
  it('renders RatingDisplay component', () => {
    const wrapper = mount(<RatingDisplay rating={3.5} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Give return correct value', () => {
    const wrapper = shallow(<RatingDisplay rating={3.5}/>);
    expect(wrapper.text()).toEqual("35%");
  });
});
