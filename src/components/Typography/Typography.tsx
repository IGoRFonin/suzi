import React from 'react';
import { makeStyles, Theme } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) => ({
    h1: theme.typography.h1,
    h2: theme.typography.h2,
    body1: theme.typography.body1,
    body2: theme.typography.body2,
    subtitle1: theme.typography.subtitle1,
}));

type Typography = {
    as: 'h1' | 'h2' | 'body1' | 'body2' | 'subtitle1';
    children: JSX.Element | string;
};

const Typography = ({ as, children }: Typography) => {
    const classes = useStyles();
    return <div className={classes[as]}>{children}</div>;
};

export default Typography;
