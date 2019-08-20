import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';
import classes from '../Modal.module.css';

const pptModal = (props) => {
    let renderItem = null;
    //const pptregexp = /^https?.+\.(pdf|ppt|pptx)$/;

    //if (pptregexp.test(this.props.imgSrc)) {
    console.log("Here is the PowerPoint");
    renderItem =
        <iframe
            title="PowerPointModal"
            className={classes.Modal}
            src={props.imgSrc + "#toolbar=0"}
            width="100%" height="500px"
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0',
            }}
        />;

    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            {renderItem}
        </Aux>
    );
}

export default pptModal;