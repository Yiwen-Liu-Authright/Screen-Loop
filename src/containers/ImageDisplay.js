import React, {Component} from 'react';
import Aux from '../hoc/Aux/Aux';
import Modal from '../components/UI/Modal/Modal';

class ImageDisplay extends Component{
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
        let urlList = [...this.props.optionList];
        this.setState({currentPic:urlList[i]});

        const loop = setInterval(() => {
            i++;
            if (i >= urlList.length) {
                i = 0;
            }
            this.setState({
                currentPic:urlList[i],
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
                <Modal show={this.state.showingPics} modalClosed={this.lightBoxCloseHandler} imgSrc={this.state.currentPic} />
                <button className="btn btn-dark btn-lg btn-block" onClick = {this.navigate}>Launch</button>
            </Aux>
        )
    }
    
}

export default ImageDisplay;