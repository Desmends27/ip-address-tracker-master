import {MapContainer, TileLayer, Marker} from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import './styles/Map.css';
import L from 'leaflet';

const Map = ({ipData, errorMessage}) => {
    if  (errorMessage){
        return (
            <div className="error_map">
                <img src={require('./images/2101.i402.020_Computer_repair_404_flat_composition.jpg')} alt='error_image'/>
            </div>
        )
    }
    else  if (!Object.keys(ipData).length) {
        console.log("waiting");
    }
    else{
        const longitude = ipData["lat"]
        const latitude = ipData["lng"];
        const position = [longitude, latitude];
        const customIcon = L.divIcon({
            html:
            `
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="56" style="background: transparent;">
            <path fill-rule="evenodd" d="M39.263 7.673c8.897 8.812 8.966 23.168.153 32.065l-.153.153L23 56 6.737 39.89C-2.16 31.079-2.23 16.723 6.584 7.826l.153-.152c9.007-8.922 23.52-8.922 32.526 0zM23 14.435c-5.211 0-9.436 4.185-9.436 9.347S17.79 33.128 23 33.128s9.436-4.184 9.436-9.346S28.21 14.435 23 14.435z"/>
        </svg>    
            `,
            iconSize: [10, 16]
        })
        return (
            <MapContainer center={position} zoom={15}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={customIcon}></Marker>
            </MapContainer>
        );
    }
}
export default Map;