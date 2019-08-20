import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.module.css';

class Modal_ppt extends Component {

    render() {
        let renderItem = null
        //const pptregexp = /^https?.+\.(pdf|ppt|pptx)$/;

        //if (pptregexp.test(this.props.imgSrc)) {
        console.log("Here is the PowerPoint");
        renderItem = 
        // <a href={this.props.imgSrc} />
        <iframe
            className={classes.Modal}
            src={this.props.imgSrc + "#toolbar=0"}
            width="100%" height="500px"
            style={{
                transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: this.props.show ? '1' : '0',
            }}
        >
        </iframe>
        // }
        // else {
        //     console.log("Not image and video");
        //     renderItem = <img
        //         className={classes.Modal}
        //         src={'https://i.ytimg.com/vi/L1tx-wAI6Nw/maxresdefault.jpg'}
        //         alt="not show"
        //         style={{
        //             transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
        //             opacity: this.props.show ? '1' : '0',
        //         }}>
        //     </img>
        // }

        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                {renderItem}
            </Aux>
        );
    }
}

export default Modal_ppt;