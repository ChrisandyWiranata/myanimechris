"use client"

import YouTube from "react-youtube"

const VideoTrailer = ({ videoId }) => {
    const options = {
        width: '100%',
        height: '100%'
    };

    return (
        <div className="relative pb-[56.25%] h-0">
            <YouTube
                className="absolute top-0 left-0 w-full h-full"
                videoId={videoId}
                onPlay={(event) => event.target.pauseVideo}
                opts={options}
                onError={() => alert("Video is broken, please try another.")}
            />
        </div>
    );
};


export default VideoTrailer