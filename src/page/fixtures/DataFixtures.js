import { useState } from 'react'
import axios from "axios";
import getCenter from "geolib/es/getCenter";
import Map, { Marker, Popup } from 'react-map-gl';

// import Maps from "../../components/Maps";

// pk.eyJ1IjoiZGlhYmxvb28iLCJhIjoiY2t0NTl4NHZ4MDZmcTJvanA2amZ2ZDQ1dCJ9.i7LqzzkWl031Iy-saXGAuw



const DataFixtures = () => {
    const [image, setImage] = useState("");
    const [post, setPost] = useState([]);

    const getValue = (event) => {
        setImage(event.target.value);
    };

    const getImages = () => {
        // const url = "https://soccer.sportmonks.com/api/v2.0/fixtures/date/" + image + "?api_token=" + baseURL;
        axios.get(`https://soccer.sportmonks.com/api/v2.0/fixtures/date/${image}?api_token=${process.env.REACT_APP_API_KEY}`)
            .then((response) => {
                setPost(response.data.data);
            })
    }

    // const coordinatesss = post.map((result) => ({
    //     latitude: result.weather_report.coordinates.lat,
    //     longitude: result.weather_report.coordinates.lon,
    // }));
    const cor = post.map((result) => result.weather_report.coordinates?.lat)
    const corr = post.map((result) => result.weather_report.coordinates?.lon)
    // const center = geolib.getCenter([
    //     { latitude: 52.516272, longitude: 13.377722 },
    //     { latitude: 51.515, longitude: 7.453619 },
    //     { latitude: 51.503333, longitude: -0.119722 },
    // ]);

    const center = getCenter(cor, )
    const [selectedLocation, setSelectedLocation] = useState({});
    const [viewport, setViewport] = useState({
        latitude: cor,
        longitude: corr,
        zoom: 11,
    });
    //  let latt = post.map((item) => item.weather_report.coordinates?.lat)
    //  let lonn = post.map((item) => item.weather_report.coordinates?.lon)
    // console.log(latt)
    // console.log(lonn)


    return (
        <div>
            <input
                type="date"
                name="image"
                placeholder="Search images..."
                onChange={getValue}
            // onKeyDown={getImages}
            />
            <button onClick={getImages} type="submit">Search</button>


            <div className="row">
                {post.map((item) => (
                    <div key={item.id} className="col-md-6 col-sm-6 col-6 mt-3">
                        {item.id}
                        <br />
                        {item.colors.localteam.color}
                        <br />
                        <div>
                            {item.colors.localteam.kit_colors}
                        </div>
                        <br />
                        {item.formations.localteam_formation}
                        <br />
                        {item.formations.visitorteam_formation}
                        <br />
                        {item.time.starting_at.date}
                        <br />
                        {item.time.starting_at.date_time}
                        <br />
                        {item.time.starting_at.time}
                        <br />
                        latlatlatlat         {item.weather_report.coordinates?.lat}
                        <br />
                        lonlonlonlon          {item.weather_report.coordinates?.lon}
                        <br />
                        {/* initialViewState={{
                            longitude: item.weather_report.coordinates?.lon,
                            latitude: item.weather_report.coordinates?.lat,
                            zoom: 14
                        }} */}
                        <Map
                            mapStyle="mapbox://styles/diablooo/cl0ajfgj9000814sdcpwg9lvg"
                            mapboxAccessToken="pk.eyJ1IjoiZGlhYmxvb28iLCJhIjoiY2t0NTl4NHZ4MDZmcTJvanA2amZ2ZDQ1dCJ9.i7LqzzkWl031Iy-saXGAuw"
                            {...viewport}
                            onViewportChange={(nextViewport) => setViewport(nextViewport)}
                            style={{ width: 600, height: 400 }}
                        >

                            <Marker
                                longitude={item.weather_report.coordinates?.lon}
                                latitude={item.weather_report.coordinates?.lat}
                                offsetLeft={-20}
                                offsetTop={-10}
                            >
                                <p
                                    role="img"
                                    onClick={() => setSelectedLocation(item)}
                                    aria-label="push-pin"
                                >
                                    🐑
                                </p>

                            </Marker>



                        </Map>
                        {/* <Maps searchResults={post} /> */}
                        humidity  {item.weather_report.humidity}
                        <br />
                        <img src={item.weather_report.icon} alt="" />
                        <br />
                        pressure {item.weather_report.pressure}
                        <br />
                        temp {item.weather_report.temperature.temp}
                        <br />
                        unit {item.weather_report.temperature.unit}
                        <br />
                        degree {item.weather_report.wind.degree}
                        <br />
                        speed {item.weather_report.wind.speed}
                        <br />
                    </div>
                ))}
                <div className="col-md-6">
                    {/* <Maps searchResults={post} /> */}
                    dsadsadsadsfa
                </div>
            </div>



        </div>
    )
}

export default DataFixtures