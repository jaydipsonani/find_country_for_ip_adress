import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './Home';
import About from './About';

function App() {

  // const [ipAddress, setIpAddress] = useState('');
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
  }, []);

  // const handleSearch = () => {
  //   handleclear();
  //   setIpAddress('');
  //   setError(null);
  // }

  // const handleclear = () => {
  //   setIpAddress('');
  // }

    return (
      <>
        <div className='App'>
          {/* <input
            type='text'
            placeholder='Enter IP Address'
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button> */}

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
