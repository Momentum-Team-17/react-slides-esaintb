import { useState } from 'react';
import { filmData } from './film-data.json';


function Apple() {
    return (
        <div className="section">
            <div>
                <div>
                    {filmData.map(data => {
                        return <ghibliFilms data={data} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default function Gallery() {
    const [index, setIndex] = useState(0);
    // const [showMore, setShowMore] = useState(false);

    function handleNextClick() {
        setIndex(index + 1);
    }

    function handleBackClick() {
        setIndex(index - 1);
    }

    let film = filmData[index];
    return (
        <>
            <button onClick={handleNextClick}>
                Next
            </button>
            <button onClick={handleBackClick}>
                Back
            </button>
            <h2>
                <i>{film.title} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {filmData.length})
            </h3>
            {/* <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button> */}
            {/* {showMore && <p>{sculpture.description}</p>}
            <img
                src={sculpture.url}
                alt={sculpture.alt} */}
            />
        </>
    );
}
