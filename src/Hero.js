import { useState} from 'react';
import './styles/Hero.css'
const Hero = ({ipData, inputValue, errorMessage}) => {
    let [wait] = useState(true);
    if (errorMessage){
        return (
        <div className="hero error">
            <h2>{errorMessage}</h2>
        </div>
        )
    }
    else if (!Object.keys(ipData).length) {
        return (
            <div className="hero wait">
                {wait && <h2>Fetching data ....</h2>}
            </div>
        )
      }
    else {
        // ip, city, region, postalCode, timezone, isp
        return ( 
            <div className="hero complete">
                <div className=" detail ip">
                    <p className="title">ip address</p>
                    <p className="content">{ipData.ip}</p>
                </div>
                <div className=" detail location">
                    <p className="title">location</p>
                    <p className="content">{ipData.region}, {ipData.city} {ipData.postalCode}</p>
                </div>
                <div className=" detail timezone">
                    <p className="title">timezone</p>
                    <p className="content">UTC{ipData.timezone}</p>
                </div>
                <div className=" detail isp">
                    <p className="title">isp</p>
                    <p className="content">{ipData.isp}</p>
                </div>
            </div>
         );
    }
}
 
export default Hero;