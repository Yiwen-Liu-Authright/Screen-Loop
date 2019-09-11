import React from 'react';
import { connect } from 'react-redux';
import Aux from '../hoc/Aux/Aux';
import ImageModal from '../components/UI/Modal/ImageModal';
//import ImageBox from './ImageBox';
import ImageOption from './ImageOption';

class ImageDisplay extends React.Component {
    state = {
        currentPic: null,
        showingPics: false,
        index: 0,
        loop: undefined,
    }

    lightBoxCloseHandler = () => {
        this.setState({ showingPics: false });
        clearInterval(this.state.loop);
    }

    navigate = () => {
        let i = this.state.index;
        let imageList = [...this.props.imageList];
        this.setState({ currentPic: imageList[i] });

        const loop = setInterval(() => {
            i++;
            if (i >= imageList.length) {
                i = 0;
            }
            this.setState({
                currentPic: imageList[i],
                index: i,
            });

        }, this.props.currentInterval * 1000);

        this.setState({
            loop: loop,
            showingPics: true,
        })
    }

    render() {
        return (
            <Aux>
                <ImageOption />
                <ImageModal show={this.state.showingPics} modalClosed={this.lightBoxCloseHandler} imgSrc={this.state.currentPic} />
                <div className="row">
                    <div className="col-10">
                        <button className="btn btn-dark btn-lg btn-block" style={{background: "rgb(0,0,03,0.8)"}} onClick={this.navigate}>Launch</button>
                    </div>
                </div>
            </Aux>
        )
    }

}
const mapStateToProps = (state) => ({
    imageList: state.imageList,
    currentInterval: state.currentInterval,
})
export default connect(mapStateToProps)(ImageDisplay);