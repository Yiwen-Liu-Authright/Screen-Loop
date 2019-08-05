import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

import ScreenLoop from './ScreenLoop';
import UrlBox from './UrlBox';
import { isTSAnyKeyword, exportAllDeclaration, isExportDefaultSpecifier } from '@babel/types';

configure({ adapter: new Adapter() });

/* Unit Test for the UrlBox
 * Pass the general situation, However, still have the bondary problem, need to ask Zixiao
 */
describe('<UrlBox/> Move Url Down', () => {

    it('=> Initial selectOption is undefined', () => {
        const wrapper = shallow(<UrlBox
            optionList={[1, 2, 3]}
        />);
        expect(wrapper.state('selectOption')).toBe(undefined);
    });

    // it('=> Without selected option, after running the move url down, suppose not change the url order', () => {
    //     const testList = [1, 2, 3];
    //     const screenLoopWrapper = shallow(<ScreenLoop />);
    //     const urlBoxWrapper = shallow(<UrlBox
    //         optionList={testList}
    //         optionListHandler={screenLoopWrapper.instance().optionListHandler}
    //     />);
    //     urlBoxWrapper.setState({ selectOption: 4});
    //     urlBoxWrapper.instance().moveDownOption();
    //     expect(screenLoopWrapper.state('optionList')).toMatchObject([1, 2, 3]);
    // })

    it('=> With selected option, after running the move url down, suppose change the url order', () => {
        const testList = [1, 2, 3];
        const screenLoopWrapper = shallow(<ScreenLoop />);
        const urlBoxWrapper = shallow(<UrlBox
            optionList={testList}
            optionListHandler={screenLoopWrapper.instance().optionListHandler}
        />);

        urlBoxWrapper.setState({ selectOption: testList[0] });
        urlBoxWrapper.instance().moveDownOption();
        expect(screenLoopWrapper.state('optionList')).toMatchObject([2, 1, 3]);
    })
});