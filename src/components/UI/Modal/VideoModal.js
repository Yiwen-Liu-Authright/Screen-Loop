import React from 'react';
// import { connect } from 'react-redux';
// import ReactPlayer from 'react-player'
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';
import classes from '../Modal.module.css';

const videoModal = (props) => {


    return (
        <Aux>
            {console.log(props.imgSrc)}
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <video controls autoPlay
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0',
                }}>
                <source src={props.imgSrc}></source>
            </video>
        </Aux>
    );
}

// const mapStateToProps = (state) => ({
//     imageHolder: state.imageHolder
// })
export default videoModal;