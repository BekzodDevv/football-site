import { useState } from 'react'
import axios from "axios";
import Maps from "../../components/Maps";


const DataFixtures = () => {
    const [image, setImage] = useState("");
    const [post, setPost] = useState([]);

    const getValue = (event) => {
        setImage(event.target.value);
    };

    const getImages = () => {
        axios.get(`https://soccer.sportmonks.com/api/v2.0/fixtures/date/${image}?api_token=${process.env.REACT_APP_API_KEY}`)
            .then((response) => {
                setPost(response.data.data);
            })
    }

    const postt = post.slice(0, 1)

    return (
        <div className="container">
            <div className="d-flex align-items-center justify-content-center">
                <input
                    type="date"
                    className="form-control w-25"
                    name="image"
                    placeholder="Search images..."
                    onChange={getValue}
                />
                <button
                    onClick={getImages}
                    className="btn btn-success"
                    type="submit"
                >
                    Search
                </button>
            </div>


            <div className="row">
                {postt.map((item) => (
                    <div key={item.id} className="col-md-12 col-sm-12 col-12 mt-3">
                        <div className="row">
                            <div className="col-md-6 col-sm-12 col-12">
                                <div>
                                    {item.colors.localteam.color}
                                    {item.colors.localteam.kit_colors}
                                </div>
                                <br />
                                localteam_formation {item.formations.localteam_formation}
                                <br />
                                visitorteam_formation  {item.formations.visitorteam_formation}
                                <br />
                                {item.time.starting_at.date}
                                <br />
                   
                                {item.time.starting_at.time}
                                <br />

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
                            <div className="col-md-6 col-sm-12 col-12">
                                <Maps lon={item.weather_report.coordinates?.lon} lat={item.weather_report.coordinates?.lat} />
                            </div>
                        </div>

                    </div>
                    //     <div className="col-md-6 col-sm-12 col-12">
                    //     <Maps lon={item.weather_report.coordinates?.lon} lat={item.weather_report.coordinates?.lat} />
                    // </div>
                ))}
                {/* <Maps searchResults={post} /> */}
            </div>



        </div>
    )
}

export default DataFixtures