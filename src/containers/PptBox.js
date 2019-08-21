import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setInterval, setPptList } from '../actions/actions';
import axios from '../axios-list'

class PptBox extends Component {
    componentWillMount() {
        axios.get('https://screen-loops.firebaseio.com/initialState/pptList.json')
        .then(response => {
            this.props.setPptList(response.data);
        })
    }
    // update pptlist button
    listupdateHandler = () => {
        let updatedlist = [...this.props.pptList]
        axios.put('https://screen-loops.firebaseio.com/initialState/pptList.json', updatedlist)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }

    state = {
        selectPpt: undefined,
        newPpt: "",
        newInterval: "",
    }

    handleChange = (event) => {
        this.setState({ selectPpt: event.target.value });
    }

    handleChangePpt = (event) => {
        this.setState({ newPpt: event.target.value });
    }

    handleInterval = (event) => {
        this.setState({ newInterval: event.target.value });
    }

    moveUpPpt = () => {
        const index = this.props.pptList.indexOf(this.state.selectPpt);
        if (this.state.selectPpt !== undefined && index > 0) {
            console.log("Move Up Ppt");
            let nextPptList = [...this.props.pptList];
            let temp = nextPptList[index - 1];
            nextPptList[index - 1] = nextPptList[index];
            nextPptList[index] = temp;
            // dispatch setPptList
            this.props.setPptList(nextPptList);
            // return for test
            return nextPptList;
        }
        // return for test
        return this.props.pptList;
    }

    moveDownPpt = () => {

        const index = this.props.pptList.indexOf(this.state.selectPpt);
        if (this.state.selectPpt !== undefined && index < this.props.pptList.length - 1) {
            let nextPptList = [...this.props.pptList];
            let temp = nextPptList[index + 1];
            nextPptList[index + 1] = nextPptList[index];
            nextPptList[index] = temp;
            // dispatch setPptList
            this.props.setPptList(nextPptList);
            // return for test
            return nextPptList;
        }
        // return for test
        return this.props.pptList;
    }

    removePpt = () => {
        const index = this.props.pptList.indexOf(this.state.selectPpt);
        let nextPptList = [...this.props.pptList];
        if (index >= 0) {
            nextPptList.splice(index, 1);
            // dispatch setPptList
            this.props.setPptList(nextPptList)
            this.setState({
                selectPpt: undefined
            })
        }
    }

    addPpt = () => {
        let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (regexp.test(this.state.newPpt)) {
            let nextPptList = [...this.props.pptList];
            nextPptList.push(this.state.newPpt);
            // dispatch setPptList
            this.props.setPptList(nextPptList);
            this.setState({
                newPpt: ""
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
            <div className="urlBox" >
                <div className="row">
                    <div className="col-11">
                        <select
                            className="custom-select"
                            size="10"
                            value={this.state.selectPpt}
                            onChange={this.handleChange}
                        >
                            {this.props.pptList.map((ppt, index) => {
                                return <option key={ppt} value={ppt}>{ppt}</option>

                            })}
                            }
                        </select>
                    </div>
                    <div className="col-1">
                        <button id="upButton" className="btn btn-light" style={{ marginTop: '30px' }} onClick={this.moveUpPpt}>Up</button>
                        <button className="btn btn-light" style={{ marginTop: "30px" }} onClick={this.removePpt}>Delete</button>
                        <button className="btn btn-light" style={{ marginTop: "30px" }} onClick={this.moveDownPpt}>Down</button>
                    </div>
                </div>

                <br></br>
                <br></br>

                <div className="row">
                    <div className="col-3">
                        <div className="form-group">
                            <input type="url"
                                className="form-control"
                                id="new-ppt"
                                placeholder="Add a new url"
                                value={this.state.newPpt}
                                onChange={this.handleChangePpt}
                            />
                        </div>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-light btn-block" onClick={this.addPpt}>Add URL</button>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-light btn-block" onClick={this.listupdateHandler}>Update Playlist</button>
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
                    <div className="col-1">
                        <button className="btn btn-light btn-block" onClick={this.updateInterval}>Set</button>
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
    pptList: state.pptList,
    currentInterval: state.currentInterval,
})

const mapDispatchToProps = {
    setInterval,
    setPptList,
}

// connect is a hoc function, it takes a function as parameter and return the function
export default connect(mapStateToProps, mapDispatchToProps)(PptBox);