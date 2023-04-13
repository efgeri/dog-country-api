import {useState, useEffect} from "react";
import './App.css';

function App() {

    const [dogImgUrl, setDogImgUrl] = useState("");
    const [flag, setFlag] = useState("");
    const [country, setCountry] = useState("");
    const [capital, setCapital] = useState("");
    const [month, setMonth] = useState('')
    const [priority, setPriority] = useState('')
    const [url, setUrl] = useState('')

    useEffect(
      () => {
        fetchDog()
      },[month, priority]
    )

  const fetchDog = function(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => setDogImgUrl(data.message))
  }

  const fetchCountry = function(){
    fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
      const rand = Date.now() % 250
      console.log(data[rand])
      setFlag(data[rand].flag)
      setCapital(data[rand].capital)
      setCountry(data[rand].name.common)
      setUrl(data[rand].maps.googleMaps)
    })
  }

  return (
    <div id="app">
    <h1>RANDOGMISER</h1>
    <img alt="dog" id="dog-img" src={dogImgUrl} />
    <button onClick={fetchDog}>Gimme those dogs!</button>
    <button onClick={fetchCountry}>Gimme those countries!</button>
    <h1>{flag}</h1>
    <h2>{country}</h2>
    <h2>{capital}</h2>
    <h3><a href={url} target="_blank">Open on maps</a></h3>


    <div>
        <button onClick={() => setMonth('January')}>January</button>
        <button onClick={() => setMonth('February')}>February</button>
        <button onClick={() => setMonth('March')}>March</button>
      </div>
      <div>
        <button onClick={() => setPriority('high')}>High</button>
        <button onClick={() => setPriority('low')}>Low</button>
      </div>

      <h2>Month: {month}</h2>
      <h2>Priority: {priority}</h2>

    </div>
  );
}

export default App;
