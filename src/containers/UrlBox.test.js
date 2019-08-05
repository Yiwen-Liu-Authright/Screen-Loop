import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

import UrlBox from './UrlBox';

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

    it('=> Without selected option, after running the move url down, suppose not change the url order', () => {
        const testList = [1, 2, 3];
        const urlBoxWrapper = shallow(<UrlBox
            optionList={testList}
            optionListHandler={(input) => input}
        />);
        expect(urlBoxWrapper.instance().moveDownOption()).toMatchObject([1, 2, 3]);
    })

    it('=> With selected option, after running the move url down, suppose change the url order', () => {
        const testList = [1, 2, 3];
        const urlBoxWrapper = shallow(<UrlBox
            optionList={testList}
            optionListHandler={(input) => input}
        />);
        urlBoxWrapper.setState({ selectOption: 1 });
        expect(urlBoxWrapper.instance().moveDownOption()).toMatchObject([2, 1, 3]);
    })

    it('=> select the last one, after running the move url down, suppose not change the url order', () => {
        const testList = [1, 2, 3];
        const urlBoxWrapper = shallow(<UrlBox
            optionList={testList}
            optionListHandler={(input) => input}
        />);
        urlBoxWrapper.setState({ selectOption: 3 });
        expect(urlBoxWrapper.instance().moveDownOption()).toMatchObject([1,2,3]);
    })
});