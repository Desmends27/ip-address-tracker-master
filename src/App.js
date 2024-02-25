import { useEffect, useState, useRef } from 'react';
import Hero from './Hero';
import Map from './Map';
import './styles/App.css';
import axios from 'axios';

async function logData(ip_address) {
  const url = "https://geo.ipify.org/api/v2/country,city?apiKey=at_1aH3NLZPI9d6cC0da6IIZ1QqgkX94&ipAddress=".concat(ip_address);
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) {
      console.log(data["messages"]);
      return { error_msg: data["messages"] };
    } else {
      // ip, city, region, postalcode, timezone, isp
      const values = {
        ip: ip_address,
        region: data["location"]["region"],
        city: data["location"]["city"],
        postalCode: data["location"]["postalCode"],
        timezone: data["location"]["timezone"],
        isp: data["isp"],
        lat: data["location"]["lat"],
        lng: data["location"]["lng"]
      };
      return values;
    }
  } catch (error) {
    console.error(error); // Log the error
    return { error_msg: error.message }; // Return an object with the error message
  }
}

function App() {
   let [ip_address,setIp] = useState();
   let [ipData, setipData] = useState({});
   let [errorMessage, setErrorMessage] = useState('');
   const inputRef = useRef("");
   //Get ip of user;
   const getData = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    console.log(res.data);
    setIp(res.data.ip);
  }
   useEffect(() => {
    getData();
   }, []);

   useEffect(() => {
    if (ip_address){
      logData(ip_address)
      .then(values => {
        if (values.error_msg) {
          setErrorMessage(values.error_msg);
          setipData({});
        } else {
          setErrorMessage("");
          setipData(values || {});
        }
      })
      .catch(error => {
        console.error(error);
        setErrorMessage("An error occurred while fetching data.");
        setipData({});
      });
    }
   }, [ip_address])

   const handleKeyDown = (event) => {
    if ((event.code === "Enter" && event.target.tagName === "INPUT")) {
      setIp(inputRef.current.value);
      console.log(event.target.value);
    }
  };
  const handleClick = () => {

      setIp(inputRef.current.value);
  }
  const handleChange = (event) => {
    const { value } = event.target;
    const result = value.replace(/[^0-9.]/g, '');
    inputRef.current.value = result;
  };
   return (
<div className="App">
  <header className="App-header">
    <h1>IP Address Tracker</h1>
    <label htmlFor="ip">IP Address</label>
    <div className="input" onKeyDown={handleKeyDown}>
      <input
        type="text"
        name="ip"
        id="ip_address"
        ref={inputRef}
        maxLength={45}
        onChange={handleChange}
      />
      <button onClick={handleClick} className="Submit">
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
          <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
        </svg>
      </button>
    </div>
    <Hero className="Hero" ipData={ipData} inputValue={ip_address} errorMessage={errorMessage} />
  </header>
  <Map className="Map" ipData={ipData} errorMessage={errorMessage} />
</div>

  );
}

export default App;
