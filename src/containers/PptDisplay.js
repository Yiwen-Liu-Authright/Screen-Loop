import React, {Component} from 'react';
import {connect} from 'react-redux';
import Aux from '../hoc/Aux/Aux';
import Modal_ppt from '../components/UI/Modal/PdfModal';
import PptBox from './PptBox';

class PptDisplay extends Component{
    state = {
        currentPic: null,
        showingPics: false,
        index: 0,
        loop: undefined,
    }

    lightBoxCloseHandler = () => {
        this.setState({showingPics: false});
        clearInterval(this.state.loop);
    }

    navigate = () => {
        let i = this.state.index;
        let pptList = [...this.props.pptList];
        this.setState({currentPic:pptList[i]});

        const loop = setInterval(() => {
            i++;
            if (i >= pptList.length) {
                i = 0;
            }
            this.setState({
                currentPic:pptList[i],
                index:i,
            });

        }, this.props.currentInterval * 1000);

        this.setState({
            loop: loop,
            showingPics: true,
        })
    }

    render() {
        return(
            <Aux>
                <PptBox />
                <Modal_ppt show={this.state.showingPics} modalClosed={this.lightBoxCloseHandler} imgSrc={this.state.currentPic} />
                <button className="btn btn-dark btn-lg btn-block" onClick = {this.navigate}>Launch</button>
            </Aux>
        )
    }
    
}
const mapStateToProps = (state) => ({
    pptList: state.pptList,
    currentInterval: state.currentInterval,
})
export default connect(mapStateToProps)(PptDisplay);