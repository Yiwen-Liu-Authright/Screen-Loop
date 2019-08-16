import React, { Component } from 'react';
// import ReactPlayer from 'react-player'
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.module.css';

class Modal_vid extends Component {

    render() {
        let renderItem = null
        const vidregexp = /^https?.+\.(swf|mp4|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb)$/;
        //const youtuberegexp = /^(http\:\/\/)?(youtube\.com|youtu\.be)+$/;
        if (vidregexp.test(this.props.imgSrc)) {
            console.log("Here is the video");
            renderItem = <video
            className={classes.Modal}
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0',
                }} controls loop autoPlay >
                <source src={this.props.imgSrc}></source>
            </video>
        }
        // if (youtuberegexp.test(this.props.imgSrc)) {
        //     console.log("Here is the youtube video");
        //     renderItem = <ReactPlayer 
        //         className={classes.Modal}
        //         style={{
        //             transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
        //             opacity: this.props.show ? '1' : '0',
        //         }}
        //         url={this.props.imgSrc} playing />
        // }
        else {
            console.log("Not image and video");
            renderItem = <img
                className={classes.Modal}
                src={'https://i.ytimg.com/vi/L1tx-wAI6Nw/maxresdefault.jpg'}
                alt="not show"
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0',
                }}>
            </img>
        }

        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                {renderItem }
            </Aux>
        );
    }
}

export default Modal_vid;