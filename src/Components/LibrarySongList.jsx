import React from "react";

const LibrarySongList = ({
  song,
  setSongs,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
}) => {
  // set new song us current song handler function------------------------------------------------
  const setNewSongHandler = (_id) => {
    let newCurrentSong = songs.find((song) => song.id === _id);

    const newSongActive = songs.map((song) => {
      if (song.id === _id) {
        return { ...song, active: true };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongActive);
    setCurrentSong(newCurrentSong);
    if (isPlaying) {
      setTimeout(() => {
        audioRef.current.play();
      }, 100);
    }
  };

  return (
    <div
      className={`library-song-list ${song.active ? "current-song" : ""}`}
      onClick={() => setNewSongHandler(song.id)}
    >
      <img src={song.cover} alt="song-img" />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySongList;
