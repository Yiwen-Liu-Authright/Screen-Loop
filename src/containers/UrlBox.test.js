import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import {fireEvent} from 'react-testing-library';

import UrlBox from './UrlBox';

configure({ adapter: new Adapter() });

/* Unit Test for the UrlBox
 * Pass the general situation, However, still have the bondary problem, need to ask Zixiao
 */
describe('<UrlBox/> Move Url Down', () => {

    const props = {
        optionList: [1,2,3],
        optionListHandler: (input)=>input,
    }

    it('=> Without selected option, suppose not change the url order', () => {
        const urlBoxWrapper = shallow(<UrlBox {...props}/>);
        const result = urlBoxWrapper.instance().moveDownOption();
        expect(result).toMatchObject([1, 2, 3]);
    })

    it('=> With selected option, suppose change the url order', () => {       
        const urlBoxWrapper = shallow(<UrlBox {...props}/>);
        urlBoxWrapper.setState({ selectOption: 1 });
        expect(urlBoxWrapper.instance().moveDownOption()).toMatchObject([2, 1, 3]);
    })

    it('=> select the last one, suppose not change the url order', () => {
        const urlBoxWrapper = shallow(<UrlBox {...props} />);
        urlBoxWrapper.setState({ selectOption: 3 });
        expect(urlBoxWrapper.instance().moveDownOption()).toMatchObject([1,2,3]);
    })

    // it('=> Down button being clicked', () => {
    //     const urlBoxWrapper = shallow(<UrlBox {...props} />);
    //     const downClicked = jest.fn();
    //     urlBoxWrapper.find('#upButton').simulate('click');

    //     expect(downClicked).toHaveBeenCalled();
    // })
});