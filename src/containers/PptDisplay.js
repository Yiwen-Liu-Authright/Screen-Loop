import React from 'react';
import {connect} from 'react-redux';
import Aux from '../hoc/Aux/Aux';
import PptModal from '../components/UI/Modal/PptModal';
import PptBox from './PptBox';

class PptDisplay extends React.Component{
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
                <h1 className = "lead">Powerpoint Box</h1>
                <PptBox />
                <PptModal show={this.state.showingPics} modalClosed={this.lightBoxCloseHandler} imgSrc={this.state.currentPic} />
                <div className="row">
                    <div className="col-10">
                        <button className="btn btn-dark btn-lg btn-block" onClick={this.navigate}>Launch</button>
                    </div>
                </div>
            </Aux>
        )
    }
    
}
const mapStateToProps = (state) => ({
    pptList: state.pptList,
    currentInterval: state.currentInterval,
})
export default connect(mapStateToProps)(PptDisplay);