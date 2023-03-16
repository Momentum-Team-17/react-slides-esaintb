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

  function handleBackClick() {
    setIndex(index - 1);
  }

  function handleRestartClick() {
    setIndex(0);
  }

  let data = filmData[index];
  return (
    <>
      <button onClick={handleNextClick}>
        Next
      </button>
      <button onClick={handleBackClick}>
        Back
      </button>
      <button onClick={handleRestartClick}>
        Restart
      </button>

      <h2>{data.title}</h2>
      <div className='juice'>
        <div><img src={data.image} alt="cover" /></div>
        <div>
          <h2>{data.original_title}</h2>
          <h2>{data.release_date}</h2>
          <h2>{data.description}</h2>
        </div>
      </div>
    </>
  );
}


export default App;

