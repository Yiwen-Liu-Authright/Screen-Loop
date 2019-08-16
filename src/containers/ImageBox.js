import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setInterval, setImageList } from '../actions/actions';

class ImageBox extends Component {
    state = {
        selectImage: undefined,
        newImage: "",
        newInterval: "",
    }

    handleChange = (event) => {
        this.setState({ selectImage: event.target.value });
    }

    handleChangeImage = (event) => {
        this.setState({ newImage: event.target.value });
    }

    handleInterval = (event) => {
        this.setState({ newInterval: event.target.value });
    }

    moveUpImage = () => {
        const index = this.props.imageList.indexOf(this.state.selectImage);
        if (this.state.selectImage !== undefined && index > 0) {
            console.log("Move Up Image");
            let nextImageList = [...this.props.imageList];
            let temp = nextImageList[index - 1];
            nextImageList[index - 1] = nextImageList[index];
            nextImageList[index] = temp;
            // dispatch setImageList
            this.props.setImageList(nextImageList);
            // return for test
            return nextImageList;
        }
        // return for test
        return this.props.imageList;
    }

    moveDownImage = () => {

        const index = this.props.imageList.indexOf(this.state.selectImage);
        if (this.state.selectImage !== undefined && index < this.props.imageList.length - 1) {
            let nextImageList = [...this.props.imageList];
            let temp = nextImageList[index + 1];
            nextImageList[index + 1] = nextImageList[index];
            nextImageList[index] = temp;
            // dispatch setImageList
            this.props.setImageList(nextImageList);
            // return for test
            return nextImageList;
        }
        // return for test
        return this.props.imageList;
    }

    removeImage = () => {
        const index = this.props.imageList.indexOf(this.state.selectImage);
        let nextImageList = [...this.props.imageList];
        if (index >= 0) {
            nextImageList.splice(index, 1);
            // dispatch setImageList
            this.props.setImageList(nextImageList)
            this.setState({
                selectImage: undefined
            })
        }
    }

    addImage = () => {
        let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (regexp.test(this.state.newImage)) {
            let nextImageList = [...this.props.imageList];
            nextImageList.push(this.state.newImage);
            // dispatch setImageList
            this.props.setImageList(nextImageList);
            this.setState({
                newImage: ""
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
            <div className="imageBox" >
                <div className="row">
                    <div className="col-11">
                        <select
                            className="custom-select"
                            size="10"
                            value={this.state.selectImage}
                            onChange={this.handleChange}
                        >
                            {this.props.imageList.map((image, index) => {
                                return <option key={image} value={image}>{image}</option>

                            })}
                            }
                        </select>
                    </div>
                    <div className="col-1">
                        <button id="upButton" className="btn btn-light" style={{ marginTop: '30px' }} onClick={this.moveUpImage}>Up</button>
                        <button className="btn btn-light" style={{ marginTop: "30px" }} onClick={this.removeImage}>Delete</button>
                        <button className="btn btn-light" style={{ marginTop: "30px" }} onClick={this.moveDownImage}>Down</button>
                    </div>
                </div>

                <br></br>
                <br></br>

                <div className="row">
                    <div className="col-5">
                        <div className="form-group">
                            <input type="url"
                                className="form-control"
                                id="new-image"
                                placeholder="Add a new url"
                                value={this.state.newImage}
                                onChange={this.handleChangeImage}
                            />
                        </div>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-light btn-block" onClick={this.addImage}>Add URL</button>
                    </div>
                    <div className="col-1">
                        <button className="btn btn-light btn-block" onClick={this.updateInterval}>Set</button>
                    </div>
                    <div className="col-2">
                        <input
                            type="text"
                            className="form-control mb-2 mr-sm-2"
                            id="interval"
                            placeholder="Set Interval"
                            value={this.state.newInterval}
                            onChange={this.handleInterval}
                        />
                    </div>
                    <div className="col-2">
                        <p>current interval: {this.props.currentInterval}s</p>
                    </div>
                </div>
            </div >
        )
    }

}

const mapStateToProps = (state) => ({
    imageList: state.imageList,
    currentInterval: state.currentInterval,
})

const mapDispatchToProps = {
    setInterval,
    setImageList,
}

// connect is a hoc function, it takes a function as parameter and return the function
export default connect(mapStateToProps, mapDispatchToProps)(ImageBox);