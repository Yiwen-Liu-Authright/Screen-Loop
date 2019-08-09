import React from 'react';
import { connect } from 'react-redux';
// import { setInterval } from '../actions/actions';
import Title from '../components/Title';
import UrlBox from './UrlBox';
import Aux from '../hoc/Aux/Aux';
import ImageDisplay from './ImageDisplay';


class ScreenLoop extends React.Component {

    // currentIntervalHandler = (value) => {
    //     this.setState({ currentInterval: value })
    // }

    // optionListHandler = (value) => {
    //     this.setState({ optionList: value })
    // }

    render() {
        const currentInterval = this.props.currentInterval;
        console.log("Current Interval: " + currentInterval);
        return (
            <Aux>
                <Title headerTitle="Funny Screen" comments="A list of pages to be looped." />
                <UrlBox
                    // optionListHandler={this.optionListHandler}
                    optionList={this.props.optionList}
                    // currentIntervalHandler={this.currentIntervalHandler}
                    currentInterval={this.props.currentInterval} />
                <ImageDisplay
                    optionList={this.props.optionList}
                    // currentInterval={this.props.currentInterval}
                />

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