import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setInterval, setVideoList } from '../actions/actions';
import axios from '../axios-list'

class VideoBox extends Component {
    componentWillMount() {
        axios.get('https://screen-loops.firebaseio.com/initialState/videoList.json')
        .then(response => {
            this.props.setVideoList(response.data);
        })
    }
    // update videolist button
    listupdateHandler = () => {
        let updatedlist = [...this.props.videoList]
        axios.put('https://screen-loops.firebaseio.com/initialState/videoList.json', updatedlist)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }

    state = {
        selectVideo: undefined,
        newVideo: "",
        newInterval: "",
    }

    handleChange = (event) => {
        this.setState({ selectVideo: event.target.value });
    }

    handleChangeVideo = (event) => {
        this.setState({ newVideo: event.target.value });
    }

    handleInterval = (event) => {
        this.setState({ newInterval: event.target.value });
    }

    moveUpVideo = () => {
        const index = this.props.videoList.indexOf(this.state.selectVideo);
        if (this.state.selectVideo !== undefined && index > 0) {
            console.log("Move Up Video");
            let nextVideoList = [...this.props.videoList];
            let temp = nextVideoList[index - 1];
            nextVideoList[index - 1] = nextVideoList[index];
            nextVideoList[index] = temp;
            // dispatch setVideoList
            this.props.setVideoList(nextVideoList);
            // return for test
            return nextVideoList;
        }
        // return for test
        return this.props.videoList;
    }

    moveDownVideo = () => {

        const index = this.props.videoList.indexOf(this.state.selectVideo);
        if (this.state.selectVideo !== undefined && index < this.props.videoList.length - 1) {
            let nextVideoList = [...this.props.videoList];
            let temp = nextVideoList[index + 1];
            nextVideoList[index + 1] = nextVideoList[index];
            nextVideoList[index] = temp;
            // dispatch setVideoList
            this.props.setVideoList(nextVideoList);
            // return for test
            return nextVideoList;
        }
        // return for test
        return this.props.videoList;
    }

    removeVideo = () => {
        const index = this.props.videoList.indexOf(this.state.selectVideo);
        let nextVideoList = [...this.props.videoList];
        if (index >= 0) {
            nextVideoList.splice(index, 1);
            // dispatch setVideoList
            this.props.setVideoList(nextVideoList)
            this.setState({
                selectVideo: undefined
            })
        }
    }

    addVideo = () => {
        let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (regexp.test(this.state.newVideo)) {
            let nextVideoList = [...this.props.videoList];
            nextVideoList.push(this.state.newVideo);
            // dispatch setVideoList
            this.props.setVideoList(nextVideoList);
            this.setState({
                newVideo: ""
            })
        }
        else {
            alert("Wrong URL format");
        }
    }

    updateInterval = () => {
        if (this.state.newInterval === "") {
            alert("Interval can't be empty")
        }
        else if (!isNaN(this.state.newInterval)) {
            let temp = this.state.newInterval;
            // dispatch setInterval
            this.props.setInterval(temp);
            this.setState({
                newInterval: ""
            })

        }
        else {
            alert("Not a number");
        }
    }

    render() {
        return (
            <div className="Video Box" >
                <div className="row">
                    <div className="col-10">
                        <select
                            className="custom-select"
                            size="9"
                            value={this.state.selectImage}
                            onChange={this.handleChange}
                        >
                            {this.props.videoList.map((image, index) => {
                                return <option key={image} value={image}>{image}</option>
                            })}
                            }
                        </select>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-light btn-block" onClick={this.moveUpImage}>Up</button>
                        <button className="btn btn-light btn-block" onClick={this.removeImage}>Delete</button>
                        <button className="btn btn-light btn-block" onClick={this.moveDownImage}>Down</button>
                        <button className="btn btn-dark btn-block" onClick={this.listupdateHandler}>Update</button>
                    </div>
                    <div className="col-2">

                    </div>
                </div>

                <br></br>

                <div className="row">
                    <div className="col-3">
                        <div className="form-group">
                            <input type="url"
                                className="form-control"
                                id="new-image"
                                placeholder="Add a new video source"
                                value={this.state.newImage}
                                onChange={this.handleChangeImage}
                            />
                        </div>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-light btn-block" onClick={this.addImage}>Add URL</button>
                    </div>
                    <div className="col-3">
                        <input
                            type="text"
                            className="form-control mb-2 mr-sm-2"
                            id="interval"
                            placeholder={"Current Interval: " + this.props.currentInterval + "s"}
                            value={this.state.newInterval}
                            onChange={this.handleInterval}
                        />
                    </div>
                    <div className="col-2">
                        <button className="btn btn-light btn-block" onClick={this.updateInterval}>Set Interval</button>
                    </div>
                </div>
            </div >
        )
    }

}

const mapStateToProps = (state) => ({
    videoList: state.videoList,
    currentInterval: state.currentInterval,
})

const mapDispatchToProps = {
    setInterval,
    setVideoList,
}

// connect is a hoc function, it takes a function as parameter and return the function
export default connect(mapStateToProps, mapDispatchToProps)(VideoBox);