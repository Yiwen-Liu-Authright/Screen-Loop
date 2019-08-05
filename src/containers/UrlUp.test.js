import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UrlBox from './UrlBox';
import ScreenLoop from './ScreenLoop';


configure({ adapter: new Adapter() });

describe('<UrlBox /> Move Up Button', () => {
    it('should...', () => {

        const wrapperScreen = shallow(<ScreenLoop />);

        const wrapperUrl = shallow(<UrlBox
            optionListHandler={wrapperScreen.instance().optionListHandler}
            optionList={wrapperScreen.state().optionList}
            currentIntervalHandler={wrapperScreen.instance().currentIntervalHandler}
            currentInterval={wrapperScreen.state().currentInterval}
        />);

        wrapperUrl.setState({ selectOption: "//placekitten.com/4000/3000" });
        wrapperUrl.find('button').at(0).simulate('click');

        
        expect(wrapperScreen.state().optionList).toEqual([
            "//placekitten.com/4000/3000",
            "//placekitten.com/1500/500",
            "//placekitten.com/800/1200",
            "//placekitten.com/1500/1500"])
    });
})