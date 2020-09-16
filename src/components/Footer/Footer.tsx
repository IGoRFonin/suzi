import React from 'react';

import { makeStyles, Theme } from '@material-ui/styles';

import FooterMenu from '../FooterMenu/FooterMenu';
import Player from '../Player/Player';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        position: 'fixed',
        right: 0,
        bottom: 0,
        left: 0,
        background: theme.palette.secondary.backGround,
    },
    inner: {
        display: 'flex',
        flexDirection: 'column',
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.inner}>
                <Player />
                <FooterMenu />
            </div>
        </div>
    );
};

export default Footer;
