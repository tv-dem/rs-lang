import React from 'react';
import './AudioToggle.scss'

const AudioToggle = ({ setIsSound, isSound}:any) => {
 
  return (
    <div className="sound-box">
    <div className={isSound?`sound-box_sound-on`:`sound-box_sound-off`} onClick={()=>setIsSound(!isSound)}></div>
    </div>
  )
};

export default AudioToggle;
