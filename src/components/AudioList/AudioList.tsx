import React from 'react';

import AudioTrack from './AudioTrack';
import { RootState } from 'typesafe-actions';
import { connect } from 'react-redux';
import { fold } from '@devexperts/remote-data-ts';
import { HttpError, SearchVideo } from 'src/api/types';

type AutdioListProps = ReturnType<typeof mapStateToProps>;

const AutdioList = (props: AutdioListProps) => {
    const { searchVideosRD } = props;
    console.log('searchVideosRD', searchVideosRD);
    return (
        <div>
            {fold(
                () => null,
                () => <div>1</div>,
                (e: HttpError) => <div>2</div>,
                (list: SearchVideo[]) => (
                    <>
                        {list.map(video => (
                            <AudioTrack
                                title={video.channelTitle}
                                trackName={video.title}
                                key={video.videoId}
                                id={video.videoId}
                            />
                        ))}
                    </>
                ),
            )(searchVideosRD)}
        </div>
    );
};

const mapStateToProps = (state: RootState) => ({
    searchVideosRD: state.youtube.searchVideo,
});

export default connect(mapStateToProps)(AutdioList);
