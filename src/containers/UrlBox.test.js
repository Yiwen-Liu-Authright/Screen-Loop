import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import {fireEvent} from 'react-testing-library';

import { ImageBox } from './ImageBox';

configure({ adapter: new Adapter() });


/* * 
 * @Ticket: TP-71-Move-Url-Up-Test 
 * @Tester: JingWei Luo
 */
describe('<UrlBox /> Move URL Up', () => {
    it('should...', () => {
        const wrapper = shallow(<ImageBox
            imageList={[1, 2, 3]}
            setImageList = {()=> {}}
        />);
        wrapper.setState({ selectImage: 2 });
    // const result = wrapperUrl.instance().moveUpOption();
    expect(wrapper.instance().moveUpImage()).toEqual([2,1,3]);
});

    // it('should not change if no option select', () => {
    //     const wrapperUrl = shallow(<ImageBox
    //         optionList={[1, 2, 3]}
    //         optionListHandler={() => { }}
    //     />);
    //     wrapperUrl.setState({ selectOption: undefined });
    //     expect(wrapperUrl.instance().moveUpOption()).toEqual([1, 2, 3]);
    // });

    // it('should not change if the first option select', () => {
    //     const wrapperUrl = shallow(<ImageBox
    //         optionList={[1, 2, 3]}
    //         optionListHandler={() => { }}
    //     />);
    //     wrapperUrl.setState({ selectOption: 1 });
    //     expect(wrapperUrl.instance().moveUpOption()).toEqual([1, 2, 3]);
    // });
});

/* *
 * @Ticket: TP-71-Move-Url-Up-Test
 * @Tester: Yiwen Liu
 */
// describe('<UrlBox/> Move Url Down', () => {

//     const props = {
//         optionList: [1,2,3],
//         optionListHandler: (input)=>input,
//     }

//     it('=> Without selected option, suppose not change the url order', () => {
//         const urlBoxWrapper = shallow(<ImageBox {...props}/>);
//         const result = urlBoxWrapper.instance().moveDownOption();
//         expect(result).toMatchObject([1, 2, 3]);
//     })

//     it('=> With selected option, suppose change the url order', () => {       
//         const urlBoxWrapper = shallow(<ImageBox {...props}/>);
//         urlBoxWrapper.setState({ selectOption: 1 });
//         expect(urlBoxWrapper.instance().moveDownOption()).toMatchObject([2, 1, 3]);
//     })

//     it('=> select the last one, suppose not change the url order', () => {
//         const urlBoxWrapper = shallow(<ImageBox {...props} />);
//         urlBoxWrapper.setState({ selectOption: 3 });
//         expect(urlBoxWrapper.instance().moveDownOption()).toMatchObject([1,2,3]);
//     })

//     // it('=> Down button being clicked', () => {
//     //     const urlBoxWrapper = shallow(<UrlBox {...props} />);
//     //     const downClicked = jest.fn();
//     //     urlBoxWrapper.find('#upButton').simulate('click');

//     //     expect(downClicked).toHaveBeenCalled();
//     // })
// });