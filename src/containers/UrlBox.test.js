import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

import ScreenLoop from './ScreenLoop';
import UrlBox from './UrlBox';
import { isTSAnyKeyword, exportAllDeclaration, isExportDefaultSpecifier } from '@babel/types';

configure({ adapter: new Adapter() });

describe('<UrlBox/> Move Url Down', () => {

    it('=> Initial selectOption is undefined', () => {
        const wrapper = shallow(<UrlBox
            optionList={[1, 2, 3]}
        />);
        // const selectOption = wrapper.state();
        // wrapper.state('selectOption') = wrapper.state
        expect(wrapper.state('selectOption')).toBe(undefined);
    });

    it('=> Set select Option to [0]', () => {
        const testList = [1,2,3];
        const screenLoopWrapper = shallow(<ScreenLoop />);
        const urlBoxWrapper = shallow(<UrlBox 
            optionList={testList} 
            optionListHandler={screenLoopWrapper.instance().optionListHandler}
            />);

        urlBoxWrapper.setState({ selectOption: testList[0] });
        // expect(urlBoxWrapper.state('selectOption')).toBe(1);
        urlBoxWrapper.instance().moveDownOption();
        expect(screenLoopWrapper.state('optionList')).toMatchObject([2,1,3]);
    })
});