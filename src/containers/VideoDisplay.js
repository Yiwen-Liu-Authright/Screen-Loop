import React, {Component} from 'react';
import {connect} from 'react-redux';
import Aux from '../hoc/Aux/Aux';
import Modal_vid from '../components/UI/Modal/VideoModal';
import VideoBox from './VideoBox';

class VideoDisplay extends Component{
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
        let videoList = [...this.props.videoList];
        this.setState({currentPic:videoList[i]});

        const loop = setInterval(() => {
            i++;
            if (i >= videoList.length) {
                i = 0;
            }
            this.setState({
                currentPic:videoList[i],
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
                <VideoBox />
                <Modal_vid show={this.state.showingPics} modalClosed={this.lightBoxCloseHandler} imgSrc={this.state.currentPic} />
                <button className="btn btn-dark btn-lg btn-block" onClick = {this.navigate}>Launch</button>
            </Aux>
        )
    }
    
}
const mapStateToProps = (state) => ({
    videoList: state.videoList,
    currentInterval: state.currentInterval,
})
export default connect(mapStateToProps)(VideoDisplay);