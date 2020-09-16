import React, { useCallback } from 'react';
import { makeStyles, Theme } from '@material-ui/styles';
import Typography from '../Typography/Typography';

import pauseIcon from '../../assets/icons/pause.svg';
import MoreIcon from '../SvgIcons/MoreIcon';
import { useDispatch } from 'react-redux';
import { ytDownloaderThunk } from 'src/pages/ytDownloaderThunk';

type Classes = 'root' | 'icon' | 'info' | 'title' | 'trackName' | 'more';

const useStyles = makeStyles<Theme, { active: boolean }, Classes>((theme: Theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: theme.spacing(3),
        paddingRight: theme.spacing(4),
        paddingBottom: theme.spacing(3),
        paddingLeft: theme.spacing(4),
        background: props => (props.active ? theme.palette.main.red : undefined),
        cursor: 'pointer',
    },
    icon: {
        marginRight: theme.spacing(4),
    },
    info: {
        width: '100%',
        overflow: 'hidden',
    },
    title: {
        color: props => (props.active ? theme.palette.secondary.backGround : theme.palette.secondary.text),
    },
    trackName: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        color: props => (props.active ? 'rgba(255, 255, 255, 0.6)' : theme.palette.secondary.second),
    },
    more: {
        fill: props => (props.active ? theme.palette.secondary.backGround : ''),
    },
}));

type AudioTrackProps = {
    active?: boolean;
    title: string;
    trackName: string;
    id: string;
};

const AudioTrack = ({ active = false, title, trackName, id }: AudioTrackProps) => {
    const classes = useStyles({ active });
    const dispatch = useDispatch();

    const handleClick = useCallback(() => dispatch(ytDownloaderThunk(id)), [id, dispatch]);

    return (
        <div className={classes.root} onClick={handleClick}>
            {active && (
                <div className={classes.icon}>
                    <img src={pauseIcon} alt="" />
                </div>
            )}
            <div className={classes.info}>
                <Typography className={classes.title} as="body1">
                    {title}
                </Typography>
                <Typography className={classes.trackName} as="body2">
                    {trackName}
                </Typography>
            </div>
            <div>
                <MoreIcon pathClassName={classes.more} />
            </div>
        </div>
    );
};

export default AudioTrack;
