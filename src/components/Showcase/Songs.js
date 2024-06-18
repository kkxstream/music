import React from 'react'
import Card from './Card'


function Songs(props) {
 
    return (
        <div className="flex flex-wrap m-2" >
            {props.songs.map((song) => {
                return <Card onClick={() =>  props.searchFromId(song.id) } key={song.id} image={song.image} name={song.name.replace(/&quot;/g, '"')} />
            })}
        </div>                      
    )
}

export default Songs
