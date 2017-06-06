import React from 'react'
import './bg_video.css'

const PUBLIC_URL = process.env.PUBLIC_URL;

function BgVideo() {
  return (
    <div className="fullscreen-bg">
      <video loop autoPlay muted playsInline className="fullscreen-bg__video" poster={PUBLIC_URL + '/water.jpg'} src={PUBLIC_URL + '/water.mp4'} type="video/mp4" />
    </div>
  );
}

export default BgVideo;
