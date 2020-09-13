import React from 'react';
import { makeStyles, Theme } from '@material-ui/styles';

import cards from './icons/cards.svg';
import profile from './icons/profile.svg';
import home from './icons/home.svg';
import search from './icons/search.svg';
import more from './icons/more.svg';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    shadow: {
        boxShadow: '0px -4px 10px rgba(0, 0, 0, 0.08)',
    },
    item: {
        paddingTop: theme.spacing(5),
        paddingRight: theme.spacing(6),
        paddingBottom: theme.spacing(5),
        paddingLeft: theme.spacing(6),
        opacity: 0.3,
        WebkitTapHighlightColor: 'rgba(0,0,0,0)',
        '&:focus': {
            outline: 'none',
            background: 'none',
        },
    },
}));
const FooterMenu = () => {
    const classes = useStyles();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
    };

    return (
        <nav className={classes.root}>
            <a className={classes.item} onClick={handleClick} href="/">
                <img src={cards} alt="" />
            </a>
            <a className={classes.item} onClick={handleClick} href="/">
                <img src={profile} alt="" />
            </a>
            <a className={classes.item} onClick={handleClick} href="/">
                <img src={home} alt="" />
            </a>
            <a className={classes.item} onClick={handleClick} href="/">
                <img src={search} alt="" />
            </a>
            <a className={classes.item} onClick={handleClick} href="/">
                <img src={more} alt="" />
            </a>
        </nav>
    );
};

export default FooterMenu;
