import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.module.css';

class Modal_img extends Component {

    render() {
        let renderItem = null
        const imgregexp = /^http:?.+\.(jpg|png|jpeg)$/;
        if (imgregexp.test(this.props.imgSrc)) {
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

export default Modal_img;