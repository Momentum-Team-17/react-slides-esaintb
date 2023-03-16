import './App.css';
import { useState } from 'react';
import filmData from './film-data.json';

function App() {
  return (
    <div className="section">
      <div>
        <div>
          <Gallery />
        </div>
      </div>
    </div>
  )
}

function Gallery() {
  let [index, setIndex] = useState(0);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleBackClick() {
    setIndex(index - 1);
  }

  function handleRestartClick() {
    setIndex(0);
  }

  let data = filmData[index];

  return (
    <>
      <button onClick={handleRestartClick}>
        Restart
      </button>
      <button onClick={handleBackClick} disabled={index === 0}>
        Back
      </button>
      <button onClick={handleNextClick} disabled={index === filmData.length - 1}>
        Next
      </button>
      <h2 className='title'>{data.title}</h2>
      <div className='juice'>
        <div className='image'><img src={data.image} alt="cover" width='300px' height='450px' /></div>
        <div className='info'>
          <h3>{data.original_title}</h3>
          <h5>{data.release_date}</h5>
          <h4>{data.description}</h4>
        </div>
      </div>
    </>
  );
}
{/* <button class='card-footer-item' onClick={() => { setFilmIndex(0) }} disabled={filmIndex === 0}>Start Over</button> */ }


export default App;