import LibrarySongList from "./LibrarySongList"


const Library = ({songs}) => {
  return (
    <div className="library">
        <h2>Library</h2>
        <div className="library-songs">
            {
                songs.map((song)=>{
                    return <LibrarySongList song={song} key={song.id}/>
                })
            }
            
        </div>
    </div>
  )
}

export default Library