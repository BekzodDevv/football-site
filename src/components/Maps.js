
import Map, { Marker, GeolocateControl, NavigationControl, ScaleControl, FullscreenControl } from 'react-map-gl';


function Maps({ lon, lat }) {
    return (
        <div>
            <Map
                initialViewState={{
                    longitude: lon,
                    latitude: lat,
                    zoom: 14
                }}
                style={{ width: 600, height: 400 }}
                mapboxAccessToken="pk.eyJ1IjoiZGlhYmxvb28iLCJhIjoiY2t0NTl4NHZ4MDZmcTJvanA2amZ2ZDQ1dCJ9.i7LqzzkWl031Iy-saXGAuw"
                mapStyle="mapbox://styles/diablooo/cl0ajfgj9000814sdcpwg9lvg"
            >
                <Marker
                    longitude={lon}
                    latitude={lat}
                    offsetLeft={-20}
                    offsetTop={-10}
                >
                    <p
                        role="img"
                        aria-label="push-pin"
                    >
                        🏟️
                    </p>
                </Marker>
                <FullscreenControl />
                <GeolocateControl />
                <NavigationControl />
                <ScaleControl />
            </Map>
        </div>
    )
}

export default Maps
