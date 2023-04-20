
import './index.css';
import React,{useState} from 'react';
import axios from 'axios'



function App() {


  const [data, setData] = useState({})
  const [location, setLocation] = useState("")

const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8b04fe2c0a37da7217c1cf82d92ec74d&units=metric `

const searchLoc = (event) => {

  if(event.key === 'Enter'){
    axios.get(url).then((response)=> {
      setData(response.data)
      console.log(response.data)
    })
  }


}



  return (
    <div className="app">
     
      <div className='container'>
      <div className='search'>
      <input 
      type='text' 
      value={location}
      onChange={event => setLocation(event.target.value)}
      placeholder='search location'
      onKeyDown={searchLoc} />
      </div>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>{data.sys ? <p className='small'>{data.sys.country}</p> : null}
          </div>
          <div className='temp'>
            {data.main ? <h1>{data.main.temp.toFixed()}°</h1> : null}
          </div>
          <div className='description'>
           {data.weather ? <p>{data.weather[0].description}</p>: null}
          </div>
          </div>

        <div className='bottom'>
          <div className='feels'>
            {data.main ?  <p className='bold'>{data.main.feels_like.toFixed()}°</p> :  null }
           
            <p>Feels like</p>
          </div>
          <div className='humidity'>
          {data.main ?  <p className='bold'>{data.main.humidity}%</p> :  null }
            <p>Humidity</p>
          </div>
          <div className='wind'>
          {data.wind ?  <p className='bold'>{data.wind.speed.toFixed()}km</p> :  null }
            <p>Winds</p>
          </div>
         
        </div>
      </div>


    </div>
  );
}

export default App;
