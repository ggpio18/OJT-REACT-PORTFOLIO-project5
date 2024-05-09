import React from 'react'
import { SpotifyEmbed } from 'spotify-embed'

const Spotify = () => {
  return (
    <>
        <div className="playlist">
          <SpotifyEmbed link="https://open.spotify.com/playlist/0L7F6yo5BKXZZ22JjukP7f?si=e8937eecc5b240d3" />
        </div>
    </>
  )
}

export default Spotify
