import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from './Card'

function Playlists(props) { //playlists ,setPlaylistId
    const navigate = useNavigate(); //for navigating to /playlists


    return (
        <div className="flex flex-wrap m-2" >
            {props.playlists.map((playlist) => {
                return <Card onClick={() => { props.setPlaylistId(playlist.id); navigate("/playlists") }} key={playlist.id} image={playlist.image} name={playlist.name.replace(/&quot;/g, '"')} />
            })}
        </div>
    )
}
export default Playlists
