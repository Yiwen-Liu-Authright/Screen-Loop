import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css'

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/Images" active>Images</NavigationItem>
        <NavigationItem link="/Videos">Videos</NavigationItem>
        <NavigationItem link="/PowerPoints">PowerPoints</NavigationItem>
    </ul>
);

export default navigationItems;