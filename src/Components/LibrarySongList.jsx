import React from "react";

const LibrarySongList = ({ song }) => {
  return (
    <div className="library-song-list">
      <img src={song.cover} alt="song-img" />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySongList;
