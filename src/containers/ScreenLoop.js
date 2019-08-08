import React, { Component } from 'react';
import { connect } from "react-redux";
import Title from '../components/Title';
import UrlBox from './UrlBox';
import Aux from '../hoc/Aux/Aux';
import ImageDisplay from './ImageDisplay';


class ScreenLoop extends Component {
    // state = {
    //     //苏大强
    //     // optionList: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFEicmlVjxOcfOE_A0quf9A2EPPiN8QWZkIGG1ZLyU1_KagfMG",
    //     //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6EnskTIdRmctYiQbwUKVvInjUfWPk9p3-OOCu-IutovROIT19",
    //     //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Am1yp6K7oLi_bcVU72ALVwsG_xF9MJsoH9V0a4IKK-8jksLw",
    //     //     "http://cms-bucket.ws.126.net/2019/04/02/6b2f4f2690e744b48deb7ee164faee38.jpeg"],
    //     //猫片
    //     optionList: ["//placekitten.com/1500/500",
    //             "//placekitten.com/4000/3000",
    //             "//placekitten.com/800/1200",
    //             "//placekitten.com/1500/1500"],
    //     currentInterval: undefined,
    //     // loop: undefined,
    // };

    currentIntervalHandler = (value) => {
        this.setState({ currentInterval: value })
    }

    optionListHandler = (value) => {
        this.setState({ optionList: value })
    }

    loopHandler = (value) => {
        this.setState({ loop: value })
    }

    render() {
        const { optionList, currentInterval } = this.props;
        console.log("Current Interval" + currentInterval);
        return (
            <Aux>
                <Title headerTitle="Funny Screen" comments="A list of pages to be looped." />
                <UrlBox
                    optionListHandler={this.optionListHandler}
                    optionList={this.props.optionList}
                    currentIntervalHandler={this.currentIntervalHandler}
                    currentInterval={this.props.currentInterval} />
                <ImageDisplay
                    optionList={this.props.optionList}
                    // loop={this.state.loop}
                    // loopHandler={this.loopHandler}
                    currentInterval={this.props.currentInterval}
                />
                {/* {console.log("Option List: " + this.state.optionList)} */}
                {/* {console.log("CurrentInterval: " + this.props.currentInterval)} */}

            </Aux>
        )

    }
}

const mapStateToProps = (state) => ({
    optionList: state.optionList,
    currentInterval: state.currentInterval,
})
// connect is a hoc function, it takes a function as parameter and return the function
export default connect(mapStateToProps)(ScreenLoop);