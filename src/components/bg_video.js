import React from 'react'
import './bg_video.css'

const PUBLIC_URL = process.env.PUBLIC_URL;
const backgrounds = [
  ['water.jpg', 'water.mp4'],
  ['fan.jpg', 'fan.mp4'],
];

function BgVideo() {
  const bg_index = Math.floor(Math.random() * backgrounds.length);;
  const [bg_pic, bg_video] = backgrounds[bg_index];
  return (
    <div className="fullscreen-bg">
      <video loop autoPlay muted playsInline className="fullscreen-bg__video" poster={`${PUBLIC_URL}/${bg_pic}`} src={`${PUBLIC_URL}/${bg_video}`} type="video/mp4" />
    </div>
  );
}

export default BgVideo;
