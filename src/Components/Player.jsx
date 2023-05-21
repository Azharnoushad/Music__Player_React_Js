import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, setIsPlaying, isPlaying,audioRef,songInfo,setSongInfo }) => {
  

  //  play song handler function ......................................
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

 

  // time formatting function-------------------------------------------------
  const formatSecondsAsTime = (secs) => {
    var hr = Math.floor(secs / 3600);
    var min = Math.floor((secs - hr * 3600) / 60);
    var sec = Math.floor(secs - hr * 3600 - min * 60);

    if (min < 10) {
      min = "0" + min;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }

    return min + ":" + sec;
  };

  // time formatting function-------------------------------------------------

  // input drag handler function ---------------------------------------------
  const dragHandler = (event) =>{
    audioRef.current.currentTime=event.target.value
    setSongInfo({...songInfo,currentTime:event.target.value});
  }

  return (
    <div className="player">
      <div className="time-control">
        <p>{formatSecondsAsTime(songInfo.currentTime)}</p>
        <input type="range" min={0} max={songInfo.duration} value={songInfo.currentTime} onChange={dragHandler}/>
        <p>{formatSecondsAsTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
          onClick={playSongHandler}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
     
    </div>
  );
};

export default Player;
