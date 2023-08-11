import React, { useEffect, useState } from 'react';
import Navbar from "./components/Navbar";
import Pictures from './components/Pictures';
import Pagination from './components/Pagination';


function App() {
  const [pics, setPics] = useState([]);
  const [info, setInfo] = useState({});

  let initialUrl = "https://api.pexels.com/v1/search?query=nature";


  const fetchPics = (url) => {
  fetch(url,{
    headers: {
      Authorization: "esbCbP65DXKBsFthCuepl1SQm3jAEoHZQifR852E7RZ0soOwAdNRtyK2"
    }
  })
     .then(resp => resp.json())
     .then(data => {
        setPics(data.photos);
        setInfo(data);
        }
      )
  };

  const onPrevious = () => {
    fetchPics(info.prev_page);
    console.log(info.prev_page);
  }

  const onNext = () => {
    fetchPics(info.next_page);
    console.log(info.next_page);
  }

  useEffect(() => {
    fetchPics(initialUrl);
}, []);

  return (
    <>
      <Navbar brand="Pexels fetching app" />

      <div className="container mt-3">
        <Pagination prev={info.prev_page} next={info.next_page} onPrevious={onPrevious} onNext={onNext} />
        <Characters pics={pics} />
        <Pagination prev={info.prev_page} next={info.next_page} onPrevious={onPrevious} onNext={onNext} />
      </div>
    </>


  );
}

export default App;