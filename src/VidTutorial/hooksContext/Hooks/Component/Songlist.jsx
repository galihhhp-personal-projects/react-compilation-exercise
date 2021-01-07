import React, { useState } from 'react';

const Songlist = () => {
    const [songs, setSongs] = useState([
        { title: 'you', id: 1 },
        { title: 'fuck', id: 2 },
        { title: 'me', id: 3 },
    ]);

    const addSong = () => {
        setSongs([...songs, { title: 'you', id: 4 }]);
    };

    return (
        <div className='song-list'>
            <ul>
                {songs.map((song) => {
                    return <li key={song.id}>{song.title}</li>;
                })}
            </ul>
            <button onClick={addSong}>Add</button>
        </div>
    );
};

export default Songlist;
