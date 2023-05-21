import React, { useState } from "react";
import "./Styles/App.scss";
import Song from "./Components/Song";
import Player from "./Components/Player";
import { data } from "./Util/Util";
import Library from "./Components/Library";

const App = () => {
  // UseState Hooks Function-----------------------------------------------------------------
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
      />
      <Library songs={songs} />
    </div>
  );
};

export default App;
