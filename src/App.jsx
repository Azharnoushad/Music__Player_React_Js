import React, { useState } from 'react'
import "./Styles/App.scss"
import Song from './Components/Song'
import Player from './Components/Player'
import { data } from './Util/Util'

const App = () => {
  // UseState Hooks Function-----------------------------------------------------------------
  const [songs,setSongs]=useState(data())
  const [currentSong,setCurrentSong]=useState(songs[0])
  
  
  return (
    <div className="App">
    <Song currentSong={currentSong}/>
    <Player/>
    </div>
  )
}

export default App