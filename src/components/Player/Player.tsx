import React from 'react';
import { makeStyles, Theme } from '@material-ui/styles';

import more from './icons/more.svg';
import pause from './icons/pause.svg';
import Typography from '../Typography/Typography';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: theme.palette.main.blue,
        boxShadow: '0px -4px 10px rgba(0, 0, 0, 0.08)',
    },
    inner: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(4),
    },
    more: {
        marginRight: theme.spacing(4),
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginRight: theme.spacing(4),
    },
}));

const Player = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.inner}>
                <div className={classes.more}>
                    <img src={more} alt="" />
                </div>
                <div className={classes.info}>
                    <Typography as="body1">When the levee breaks</Typography>
                    <Typography as="body2">Led Zeppelin</Typography>
                </div>
                <div>
                    <img src={pause} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Player;
