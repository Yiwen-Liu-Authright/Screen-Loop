import React from 'react';
import ReactDOM from 'react-dom';
import UrlBox from './UrlBox';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import ScreenLoop from "./ScreenLoop"
import { isTSAnyKeyword } from '@babel/types';

configure({adapter: new Adapter()});

describe('AddUrl', () => {

    const props = {
        optionList: [1,2,3],
        optionListHandler: (input) => input,       
    }

    it ('Add Correct Url', () => {
        const wrapper = shallow(<UrlBox {...props}/>);
        wrapper.setState({newUrl: "www.google.com"});
        const result = wrapper.instance().addOption();
        expect(result).toMatchObject([1,2,3,"www.google.com"]);
    })

    it ('Add Empty Url', () => {
        const wrapper = shallow(<UrlBox {...props}/>);
        wrapper.setState({newUrl: ""});
        const result = wrapper.instance().addOption();
        expect(result).toMatchObject([1,2,3]);
    })

    it ('Add Incorrect Url', () => {
        const wrapper = shallow(<UrlBox {...props}/>);
        wrapper.setState({newUrl: "asdfghjkl"});
        const result = wrapper.instance().addOption();
        expect(result).toMatchObject([1,2,3]);
    })
    // it('adds URL to box', () => {
    //     const wrapper = shallow(<ScreenLoop />);
    
    //     const UrlBoxWrapper = shallow(<UrlBox
    //         optionListHandler = {wrapper.instance().optionListHandler}
    //         optionList = {wrapper.state().optionList}
    //         currentUrl = {"https://www.google.com/"}
    //     />);
    
    //     UrlBoxWrapper.setState({ newUrl: "https://www.google.com/"});
    //     // UrlBoxWrapper.find('#abc').simulate('click');

    //     const found = wrapper.state().optionList.find(function(element) {
    //         return element === "https://www.google.com/";
    //     });

    //     expect(found).toBe("https://www.google.com/");
    // });
});
