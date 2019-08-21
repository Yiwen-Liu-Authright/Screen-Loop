import React from 'react';
import { connect } from 'react-redux';

import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';
import classes from '../Modal.module.css';

const imageModal = (props) => {
    const imgRegExp = /^http:?.+\.(jpg|png|jpeg)$/;
    let imageSrc = props.imageHolder;
    if (props.imgSrc != null && imgRegExp.test(props.imgSrc)) {
        imageSrc = props.imgSrc;
    }

    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <img
                className={classes.Modal}
                src={imageSrc}
                alt="not show"
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0',
                }}>
            </img>
        </Aux>
    )
}

const mapStateToProps = (state) => ({
    imageHolder: state.imageHolder
})
export default connect(mapStateToProps)(imageModal);