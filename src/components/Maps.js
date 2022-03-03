
import { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import getCenter from "geolib/es/getCenter";



function Maps({ searchResults }) {
    const [selectedLocation, setSelectedLocation] = useState({});


    const cordinates = searchResults.map((result) => ({
        longitude: result.weather_report.coordinates?.lon,
        latitude: result.weather_report.coordinates?.lat,
    }))

    const center = getCenter(cordinates)


    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    });
    // console.log(searchResults)
    // console.log(cordinates.longitude)
    // console.log(center)
    // console.log(viewport.longitude)


    return (
        <div>
            <Map
                mapStyle="mapbox://styles/diablooo/cl0ajfgj9000814sdcpwg9lvg"
                mapboxAccessToken="pk.eyJ1IjoiZGlhYmxvb28iLCJhIjoiY2t0NTl4NHZ4MDZmcTJvanA2amZ2ZDQ1dCJ9.i7LqzzkWl031Iy-saXGAuw"
                {...viewport}
                onViewportChange={(nextViewport) => setViewport(nextViewport)}
            >

                {searchResults.map((result) => (
                    <div key={result.weather_report.coordinates?.lon} className="">
                        <Marker
                            longitude={result.weather_report.coordinates?.lon}
                            latitude={result.weather_report.coordinates?.lat}
                            offsetLeft={-20}
                            offsetTop={-10}
                        >
                            <p
                                role="img"
                                onClick={() => setSelectedLocation(result)}
                                aria-label="push-pin"
                            >
                                🐑
                            </p>

                        </Marker>

                        {selectedLocation.weather_report.coordinates?.lon === result.weather_report.coordinates?.lon ? (
                            <Popup
                                onClick={() => setSelectedLocation({})}
                                closeOnClick={true}
                                latitude={result.weather_report.coordinates?.lat}
                                longitude={result.weather_report.coordinates?.lon}
                            >
                                titletitletitletitletitle
                            </Popup>
                        ) : (
                            false
                        )}

                    </div>
                ))}


            </Map>
        </div>
    )
}

export default Maps
