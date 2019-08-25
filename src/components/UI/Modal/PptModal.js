import React from 'react';
import { connect } from 'react-redux';

import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';
import classes from '../Modal.module.css';

const pptModal = (props) => {

    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <iframe
                title="PowerPointModal"
                className={classes.Modal}
                src={props.imgSrc + "#toolbar=0"}
                width="100%" height="500px"
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0',
                }}
            />
    
        </Aux>
    );
}

const mapStateToProps = (state) => ({
    imageHolder: state.imageHolder
})
export default connect(mapStateToProps)(pptModal);