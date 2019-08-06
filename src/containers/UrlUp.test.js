import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UrlBox from './UrlBox';
import ScreenLoop from './ScreenLoop';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';


configure({ adapter: new Adapter() });

describe('<UrlBox /> Move Up Botton', () => {
    it('should...', () => {
        const wrapperUrl = shallow(<UrlBox
            optionList={[1, 2, 3]}
            optionListHandler={() => { }}
        />);
        wrapperUrl.setState({ selectOption: 2 });
        // const result = wrapperUrl.instance().moveUpOption();
        expect(wrapperUrl.instance().moveUpOption()).toEqual([2, 1, 3]);
    });

    it('should not change if no option select', () => {
        const wrapperUrl = shallow(<UrlBox
            optionList={[1, 2, 3]}
            optionListHandler={() => { }}
        />);
        wrapperUrl.setState({ selectOption: undefined });
        expect(wrapperUrl.instance().moveUpOption()).toEqual([1, 2, 3]);
    });

    it('should not change if the first option select', () => {
        const wrapperUrl = shallow(<UrlBox
            optionList={[1, 2, 3]}
            optionListHandler={() => { }}
        />);
        wrapperUrl.setState({ selectOption: 1 });
        expect(wrapperUrl.instance().moveUpOption()).toEqual([1, 2, 3]);
    });
});




// describe('<UrlBox /> Move Up Button', () => {
//     it('shoud not change with no selected option', () => {

//         // const wrapperScreen = shallow(<ScreenLoop />);

//         const wrapperUrl = shallow(<UrlBox
//             // optionListHandler={wrapperScreen.instance().optionListHandler}

//             optionListHandler={(input)=>input}
//             optionList={wrapperScreen.state().optionList}
//             currentIntervalHandler={wrapperScreen.instance().currentIntervalHandler}
//             currentInterval={wrapperScreen.state().currentInterval}
//         />);

//         // wrapperUrl.setState({ selectOption: "//placekitten.com/4000/3000" });
//         wrapperUrl.find('button').at(0).simulate('click');


//         expect(wrapperScreen.state().optionList).toEqual([
//             "//placekitten.com/1500/500",
//             "//placekitten.com/4000/3000",
//             "//placekitten.com/800/1200",
//             "//placekitten.com/1500/1500"])
//     });

//     it('should not change with the first option selected', () => {

//         const wrapperScreen = shallow(<ScreenLoop />);

//         const wrapperUrl = shallow(<UrlBox
//             optionListHandler={wrapperScreen.instance().optionListHandler}
//             optionList={wrapperScreen.state().optionList}
//             currentIntervalHandler={wrapperScreen.instance().currentIntervalHandler}
//             currentInterval={wrapperScreen.state().currentInterval}
//         />);

//         wrapperUrl.setState({ selectOption: "//placekitten.com/1500/500" });
//         wrapperUrl.find('button').at(0).simulate('click');


//         expect(wrapperScreen.state().optionList).toEqual([
//             "//placekitten.com/1500/500",
//             "//placekitten.com/4000/3000",
//             "//placekitten.com/800/1200",
//             "//placekitten.com/1500/1500"])
//     });

//     it('should change to 2134 with the second option selected', () => {

//         const wrapperScreen = shallow(<ScreenLoop />);

//         const wrapperUrl = shallow(<UrlBox
//             optionListHandler={wrapperScreen.instance().optionListHandler}
//             optionList={wrapperScreen.state().optionList}
//             currentIntervalHandler={wrapperScreen.instance().currentIntervalHandler}
//             currentInterval={wrapperScreen.state().currentInterval}
//         />);

//         wrapperUrl.setState({ selectOption: "//placekitten.com/4000/3000" });
//         wrapperUrl.find('button').at(0).simulate('click');


//         expect(wrapperScreen.state().optionList).toEqual([
//             "//placekitten.com/4000/3000",
//             "//placekitten.com/1500/500",
//             "//placekitten.com/800/1200",
//             "//placekitten.com/1500/1500"])
//     });
// })