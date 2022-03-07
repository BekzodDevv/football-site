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
            <div className="d-flex align-items-center justify-content-center mt-4">
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
                    <div key={item.id} className="col-md-12 col-sm-12 col-12 mt-5">
                        <div className="row">
                            <div className="col-md-6 col-sm-12 col-12">
                                <div>
                                    {item.colors.localteam.color}
                                    <br />                  
                                    {item.colors.localteam.kit_colors}
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5>localteam_formation</h5>
                                    <h5> {item.formations.localteam_formation}</h5>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5>visitorteam_formation</h5>
                                    <h5> {item.formations.visitorteam_formation}</h5>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5>date</h5>
                                    <h5> {item.time.starting_at.date}</h5>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5>time</h5>
                                    <h5> {item.time.starting_at.time}</h5>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5>humidity</h5>
                                    <h5> {item.weather_report.humidity}</h5>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5>icon</h5>
                                    <img src={item.weather_report.icon} alt="" />
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5>pressure</h5>
                                    <h5>{item.weather_report.pressure}</h5>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5>temp</h5>
                                    <h5>{item.weather_report.temperature.temp} </h5>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5>unit</h5>
                                    <h5>{item.weather_report.temperature.unit} </h5>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5>degree</h5>
                                    <h5>{item.weather_report.wind.degree} </h5>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5>speed</h5>
                                    <h5>{item.weather_report.wind.speed} </h5>
                                </div>
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



        </div >
    )
}

export default DataFixtures