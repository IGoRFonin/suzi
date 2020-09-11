import React from 'react';

import { makeStyles } from '@material-ui/styles';

import { Theme } from '../../theme/theme';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        color: 'black',
        padding: theme.palette.main.red,
    },
}));

const App = () => {
    const classes = useStyles();
    return <div>1</div>;
};

export default App;
