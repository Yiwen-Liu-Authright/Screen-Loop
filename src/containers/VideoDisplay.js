import React, {Component} from 'react';
import {connect} from 'react-redux';
import Aux from '../hoc/Aux/Aux';
import VideoModal from '../components/UI/Modal/VideoModal';
import VideoBox from './VideoBox';

class VideoDisplay extends Component{
    state = {
        currentVideo: null,
        showingPics: false,
        index: 0,
        loop: undefined,
    }

    lightBoxCloseHandler = () => {
        this.setState({showingPics: false});
        clearInterval(this.state.loop);
    }

    navigate = () => {
        // let i = this.state.index;
        // let videoList = [...this.props.videoList];
        // this.setState({currentVideo:videoList[i]});

        // const loop = () => {
        //     i++;
        //     if (i >= videoList.length) {
        //         i = 0;
        //     }
        //     this.setState({
        //         currentVideo:videoList[i],
        //         index:i,
        //     });

        // };

        this.setState({
            // loop: loop,
            showingPics: true,
        })
    }

    render() {
        return(
            <Aux>
                <h1 className = "lead">Video Box</h1>
                <VideoBox />
                <VideoModal show={this.state.showingPics} modalClosed={this.lightBoxCloseHandler} imgSrc={this.props.videoList[0]} />
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