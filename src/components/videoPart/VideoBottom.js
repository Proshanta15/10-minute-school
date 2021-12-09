import React from 'react'
import AllInView from './AllInView';
import PromoCode from './PromoCode';
import VideoCourseDetails from './VideoCourseDetails';

const VideoBottom = () => {
    return (
        <>
        <div className="over_main">
            <AllInView />
        </div>
            <VideoCourseDetails />
           <PromoCode />
        </>
    )
}

export default VideoBottom
