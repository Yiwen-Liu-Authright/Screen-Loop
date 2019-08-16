import React from 'react';
import AuthrightLogo from './Authright-Logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={AuthrightLogo} alt="AuthRightLogo" />
    </div>
);

export default logo;