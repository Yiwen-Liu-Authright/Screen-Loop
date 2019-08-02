import React from 'react';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ScreenLoop from './ScreenLoop';
import UrlBox from './UrlBox';

configure({ adapter: new Adapter() });

describe('Interval', () => {
    it('currentInterval should be undefined', () => {
        const wrapper = shallow(<ScreenLoop />);
        // expect(wrapper.find(UrlBox)).toHaveLength(1);
        expect(wrapper.state().currentInterval).toBe(undefined);
    });

    it('there should be only one UrlBox', () => {
        const wrapper = shallow(<ScreenLoop />);
        expect(wrapper.find(UrlBox)).toHaveLength(1);
    });
    // it('there should be only one UrlBox', () => {
    //     const wrapper = shallow(<ScreenLoop />);
    //     expect(wrapper.state().optionList).toBe(["//placekitten.com/1500/500", "//placekitten.com/4000/3000", "//placekitten.com/800/1200", "//placekitten.com/1500/1500"]);
    // });

    it('there should be only one UrlBox', () => {
        const wrapper = shallow(<ScreenLoop />);

        // const props = {
        //     optionListHandler: wrapper.instance().optionListHandler,
        //     optionList: wrapper.state().optionList,
        //     currentIntervalHandler: wrapper.instance().currentIntervalHandler,
        //     currentInterval: 5
        // };
        const UrlBoxWrapper = shallow(<UrlBox
            optionListHandler={wrapper.instance().optionListHandler}
            optionList={wrapper.state().optionList}
            currentIntervalHandler={wrapper.instance().currentIntervalHandler}
            currentInterval={5}
        />);
        // UrlBoxWrapper.find('input').first(2).simulate('change',{target: { value: 5 }});
        UrlBoxWrapper.setState({ newInterval: 5 });
        // expect(wrapper.find('optionListHandler')).toHaveLength(1);
        UrlBoxWrapper.find('#abc').simulate('click'); 
        // expect(UrlBoxWrapper.find('.btn').first(5).type()).toHaveLength(5);
        // expect(UrlBoxWrapper.state().newInterval).toBe(5)
        expect(wrapper.state().currentInterval).toBe(5);  
    });

});