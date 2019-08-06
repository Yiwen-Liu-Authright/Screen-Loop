import React, { Component } from 'react';

class urlBox extends Component {
    state = {
        // optionList: this.props.optionList,
        selectOption: undefined,
        newUrl: "",
        newInterval: "",
        
    }

    handleChange = (event) => {
        this.setState({ selectOption: event.target.value });

    }

    handleChangeUrl = (event) => {
        this.setState({ newUrl: event.target.value });
    }

    handleInterval = (event) => {
        this.setState({ newInterval: event.target.value });
    }

    moveUpOption = () => {

        const index = this.props.optionList.indexOf(this.state.selectOption);
        if (index > 0) {
            let nextOptionList = [...this.props.optionList];
            let temp = nextOptionList[index - 1];
            nextOptionList[index - 1] = nextOptionList[index];
            nextOptionList[index] = temp;
            this.props.optionListHandler(nextOptionList);
            // this.setState({
            //     optionList: nextOptionList
            // })
        }
    }

    moveDownOption = () => {
        const index = this.props.optionList.indexOf(this.state.selectOption);
        if ((this.state.selectOption !== undefined && index < this.props.optionList.length - 1)) {
            let nextOptionList = [...this.props.optionList];
            let temp = nextOptionList[index + 1];
            nextOptionList[index + 1] = nextOptionList[index];
            nextOptionList[index] = temp;
            this.props.optionListHandler(nextOptionList);
            // return for test
            return nextOptionList;
            // this.setState({
            //     optionList: nextOptionList
            // })
        }
        // return for test
        return this.props.optionList;
    }

    removeOption = () => {
        const index = this.props.optionList.indexOf(this.state.selectOption);
        let nextOptionList = [...this.props.optionList];
        if (index >= 0) {
            nextOptionList.splice(index, 1);
            this.props.optionListHandler(nextOptionList)
            this.setState({
                // optionList: nextOptionList,
                selectOption: undefined
            })
        }
    }

    addOption = () => {
        let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (regexp.test(this.state.newUrl)) {
            let nextOptionList = [...this.props.optionList];
            nextOptionList.push(this.state.newUrl);
            this.props.optionListHandler(nextOptionList);
            this.setState({
                // optionList: nextOptionList,
                newUrl: ""
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
            // Send the Current Interval back to ScreenLoop
            this.props.currentIntervalHandler(temp);
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
                            value={this.state.selectOption}
                            onChange={this.handleChange}
                        >
                            {this.props.optionList.map((option, index) => {
                                return <option key={option} value={option}>{option}</option>

                            })}
                            }
                        </select>
                    </div>
                    <div className="col-1">
                        <button id = "upButton" className="btn btn-light" style={{ marginTop: '30px' }} onClick={this.moveUpOption}>Up</button>
                        <button className="btn btn-light" style={{ marginTop: "30px" }} onClick={this.removeOption}>Delete</button>
                        <button className="btn btn-light" style={{ marginTop: "30px" }} onClick={this.moveDownOption}>Down</button>
                    </div>
                </div>

                <br></br>
                <br></br>

                <div className="row">
                    <div className="col-5">
                        <div className="form-group">
                            <input type="url"
                                className="form-control"
                                id="new-option"
                                placeholder="Add a new url"
                                value={this.state.newUrl}
                                onChange={this.handleChangeUrl}
                            />
                        </div>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-light btn-block" onClick={this.addOption}>Add URL</button>
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

export default urlBox;