import React, { useState } from 'react';
import NewSongForm from './NewSongForm';

const Songlist = () => {
  const [songs, setSongs] = useState([
    { title: 'you', id: 1 },
    { title: 'fuck', id: 2 },
    { title: 'me', id: 3 },
  ]);

  const addSong = (title) => {
    setSongs([...songs, { title, id: new Date() }]);
  };

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={addSong}>Add</button>
    </div>
  );
};

export default Songlist;
