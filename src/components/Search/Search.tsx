import React, { useCallback, useState } from 'react';

import { makeStyles, Theme } from '@material-ui/styles';
import { connect, useDispatch } from 'react-redux';
import { changeSearchAction, clearSearchAction } from 'src/pages/youtubeActions';
import { searchVideoAction } from 'src/pages/youtubeThunk';
import { RootState } from 'typesafe-actions';

import closeIcon from '../../assets/icons/close.svg';
import searchIcon from '../../assets/icons/search.svg';

const useStyles = makeStyles<Theme, { focus: boolean }>(theme => ({
    root: {
        paddingTop: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
    inner: {
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
        '&:focus': {
            outline: 'none',
        },
    },
}));

type SearchProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const Search = ({ search, changeSearch, clearSearch }: SearchProps) => {
    const dispatch = useDispatch();
    const [focus, setFocus] = useState(false);
    const classes = useStyles({ focus });

    const handleFocus = useCallback(() => setFocus(true), []);
    const handleBlur = useCallback(() => setFocus(false), []);
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => changeSearch(e.target.value), [
        changeSearch,
    ]);
    const handleClickClear = useCallback(() => clearSearch(), [clearSearch]);

    React.useEffect(() => {
        if (search.length >= 3) {
            dispatch(searchVideoAction(search));
        }
    }, [search, dispatch]);

    return (
        <div className={classes.root}>
            <div className={classes.inner}>
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
                <button className={classes.close} onClick={handleClickClear}>
                    <img src={closeIcon} alt="" />
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = (state: RootState) => ({
    search: state.youtube.search,
});

const mapDispatchToProps = {
    changeSearch: changeSearchAction,
    clearSearch: clearSearchAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
