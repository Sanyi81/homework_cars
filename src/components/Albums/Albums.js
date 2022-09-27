import {useEffect, useState} from "react";

import {Album} from "../Album/Album";

function Albums () {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(value => value.json())
            .then(value => {
                setAlbums(value)
            });
    }, []);

    return (
        <div>
            {albums.map(album => <Album album={album} key={album.id}/>)}
        </div>
    )
}
export {Albums};