import React from 'react';
import AuthrightLogo from './Authright-Logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <a href="http://authright.com/"><img src={AuthrightLogo} alt="AuthRightLogo" /></a>
    </div>
);

export default logo;