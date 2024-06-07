import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './Home';
import About from './About';

function App() {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data only on initial render
    axios.get(`http://ip-api.com/json/`)
      .then((res) => {
        console.log(res.data)
        console.log(`Searched from country: ${res.data.country} `);
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Error fetching data. Please try again.");
      });
  },[]);


    return (
      <>
        <div className='App'>


          {error && <p>{error}</p>}

          {data && (
            <>
              {/* <p>IP: {data.ip}</p> */}
              <p>City: {data.city}</p>
              <p>Country: {data.country}</p>
              <p>latitude: {data.lat}</p>
              <p>longitude: {data.lon}</p>

              <Home />
              <About />
            </>
          )}
        </div>
      </>
    );

}
export default App;
