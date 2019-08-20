import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';
import classes from '../Modal.module.css';

const imageModal = (props) => {
    const imgregexp = /^http:?.+\.(jpg|png|jpeg)$/;
    let renderItem =
        <img
            className={classes.Modal}
            src={'https://i.ytimg.com/vi/L1tx-wAI6Nw/maxresdefault.jpg'}
            alt="not show"
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0',
            }}>
        </img>;
    if (props.imgSrc != null && imgregexp.test(props.imgSrc)) {
        renderItem = <img
            className={classes.Modal}
            src={props.imgSrc}
            alt="not show"
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0',
            }}>
        </img>
    }

    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            {renderItem}
        </Aux>
    )
}

export default imageModal;