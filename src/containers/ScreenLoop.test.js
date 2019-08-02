import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

import ScreenLoop from './ScreenLoop';
import UrlBox from './UrlBox';
import ImageDisplay from './ImageDisplay';

configure({ adapter: new Adapter() });

describe("<ScreenLoop/>", () => {
    it('Contains One UrlBox', () => {
        const wrapper = shallow(<ScreenLoop />);
        // const currentUrl = wrapper.find('')
        expect(wrapper.find(UrlBox)).toHaveLength(1);
    });

    // it('Contains One ImageDisplay', () => {
    //     const wrapper = shallow(<ScreenLoop />);
    //     // const currentUrl = wrapper.find('')
    //     expect(wrapper.find(ImageDisplay)).toHaveLength(1);
    // });    

});

describe('=> Check Move the current Option Down', () => {
    it('Check Original OptionList Length', () => {
        const wrapper = shallow(<ScreenLoop/>);
        expect(wrapper.state('optionList')).toHaveLength(4);
    });
});