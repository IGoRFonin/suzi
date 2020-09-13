import React, { useCallback, useState } from 'react';

import { makeStyles, Theme } from '@material-ui/styles';
import { connect } from 'react-redux';
import { changeSearchAction } from 'src/pages/actions/youtubeActions';
import { RootState } from 'typesafe-actions';

import closeIcon from './icons/close.svg';
import searchIcon from './icons/search.svg';

const useStyles = makeStyles<Theme, { focus: boolean }>(theme => ({
    root: {
        display: 'flex',
        paddingTop: theme.spacing(2),
        paddingRight: theme.spacing(4),
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(4),
        borderRadius: 50,
        transitionProperty: 'background',
        transitionDuration: '0.1s',
        transitionTimingFunction: 'ease-in',
        background: ({ focus }) => (focus ? theme.palette.secondary.secondBg : ''),
    },
    input: {
        width: '100%',
        border: 'none',
        padding: 0,
        fontSize: 14,
        background: 'none',
        '&:focus': {
            outline: 'none',
        },
    },
    searchIcon: {
        marginRight: theme.spacing(4),
    },
    close: {
        border: 'none',
        background: 'none',
    },
}));

type SearchProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const Search = ({ search, changeSearch }: SearchProps) => {
    const [focus, setFocus] = useState(false);
    const classes = useStyles({ focus });
    const rootClass = [classes.root, classes.rootFocus].join(' ');

    const handleFocus = useCallback(() => setFocus(true), []);
    const handleBlur = useCallback(() => setFocus(false), []);
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => changeSearch(e.target.value), [
        changeSearch,
    ]);

    return (
        <div className={rootClass}>
            <img className={classes.searchIcon} src={searchIcon} alt="" />
            <input
                className={classes.input}
                value={search}
                placeholder="Искать в youtube"
                type="text"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
            />
            <button className={classes.close}>
                <img src={closeIcon} alt="" />
            </button>
        </div>
    );
};

const mapStateToProps = (state: RootState) => ({
    search: state.youtube.search,
});

const mapDispatchToProps = {
    changeSearch: changeSearchAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
