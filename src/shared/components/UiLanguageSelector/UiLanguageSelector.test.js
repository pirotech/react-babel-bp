import React from 'react';
import UiLanguageSelector from './UiLanguageSelector';
import { mount, shallow, render } from 'enzyme';

describe('Language selector test', () => {
  it('Snapshot test with mount', () => {
    const wrapper = mount(<UiLanguageSelector />);
    expect(wrapper).toMatchSnapshot();
  });
  it('Snapshot test with shallow', () => {
    const wrapper = shallow(<UiLanguageSelector />);
    expect(wrapper).toMatchSnapshot();
  });
  it('Snapshot test with render', () => {
    const wrapper = render(<UiLanguageSelector />);
    expect(wrapper).toMatchSnapshot();
  });
});
