'use client';

import '../styles/gameplayvideo.css'
import { createPlayer } from '@videojs/react';
import { VideoSkin, Video, videoFeatures } from '@videojs/react/video';
import '@videojs/react/video/skin.css';

const Player = createPlayer({ features: videoFeatures });

interface MyPlayerProps {
  src: string;
}

export const MyPlayer = ({ src }: MyPlayerProps) => {
  return (
    <Player.Provider>
      <VideoSkin>
        <Video src={src} playsInline />
      </VideoSkin>
    </Player.Provider>
  );
};

export function GameplayVideo() {
  return (
    <section className="gameplayvideo">
      <h1 className='video-title'>See It In Action</h1>
      <h4 className='video-subtitle'>Experience the smooth, satisfying gameplay that makes Pong Panic VR the most fun way to play table tennis</h4>
      <div className="video-wrapper">
        <MyPlayer src="https://stream.mux.com/BV3YZtogl89mg9VcNBhhnHm02Y34zI1nlMuMQfAbl3dM/highest.mp4"/>
      </div>
    </section>
  )
}