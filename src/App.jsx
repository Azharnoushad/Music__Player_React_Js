import React, { useState, useRef } from "react";
import "./Styles/App.scss";
import Song from "./Components/Song";
import Player from "./Components/Player";
import { data } from "./Util/data";
import Library from "./Components/Library";
import Nav from "./Components/Nav";

const App = () => {
  // UseState Hooks Function-----------------------------------------------------------------
  const [libraryStatus,setLibraryStatus] =useState(false)
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  // useState function for time ------------------------------------------
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    durations: 0,
  });
  // time update handler function------------------------------------------

  const timeUpdateHandler = (event) => {
    let currentSongTime = event.target.currentTime;
    let songDuration = event.target.duration;
    setSongInfo({
      currentTime: currentSongTime,
      duration: songDuration,
    });
  };

  // audio input ref------------------------------------------------------
  const audioRef = useRef();

  return (
    <div className={`App ${libraryStatus ? 'library-active' : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio
        src={currentSong.audio}
        ref={audioRef}
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
      ></audio>
    </div>
  );
};

export default App;
