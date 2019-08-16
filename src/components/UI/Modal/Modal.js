import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.module.css';

class Modal extends Component {

    render() {
        let renderItem = null
        const imgregexp = /^http:?.+\.(jpg|png|jpeg)$/;
        const vidregexp = /^https?.+\.(swf|mp4|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb)$/;

        if (imgregexp.test(this.props.imgSrc)) {
            console.log("Here is the image");
            renderItem = <img
                className={classes.Modal}
                src={this.props.imgSrc}
                alt="not show"
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0',
                }}>
            </img>
        }
        if (vidregexp.test(this.props.imgSrc)) {
            console.log("Here is the video");
            renderItem = <video
                className={classes.Modal}
                src={this.props.imgSrc}
                alt="not show"
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0',
                }}>
            </video>
        }
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
                {/* <img
                    className={classes.Modal}
                    src={this.props.imgSrc}
                    alt="not show"
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0',
                    }}>
                </img> */}
                {renderItem }
                {/* <video
                className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0',
                    }} autoPlay>
                    <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"></source>
                </video> */}
            </Aux>
        );
    }
}

export default Modal;