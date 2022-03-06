import { useState, useCallback } from 'react'
import axios from "axios";
import Searchch from "../../components/Searchch";
import { Link } from 'react-router-dom';


const PlayerSearch = () => {
    const [name, setName] = useState(" ");
    const [post, setPost] = useState([]);

    const getValue = useCallback(event => {
        setName(event.target.value);
    }, [name]);


    const getImages = () => {
        axios.get(`https://soccer.sportmonks.com/api/v2.0/players/search/${name}?api_token=${process.env.REACT_APP_API_KEY}`)
            .then((response) => {
                setPost(response.data.data);
            })
    }
    return (
        <>

            <Searchch getValue={getValue} getImages={getImages} />
            <div className="row">
                {post.map((item, index) => (
                    <div className="col-md-4 col-sm-6 col-12  mt-5">
                        <div key={index}>
                            <Link to={`/countriesid/:id/players/:id/statistike/${item.player_id}`}>
                                <div className="text-center">
                                    <img src={item.image_path} alt="image_path" className="img-fluid " />
                                </div>
                                <div className="mt-3">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5>Birth Country</h5>
                                        <h5> {item.birthcountry}</h5>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5>Birth Date</h5>
                                        <h5>{item.birthdate}</h5>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5>Birth Place</h5>
                                        <h5> {item.birthplace}</h5>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5>Common Name</h5>
                                        <h5> {item.common_name}</h5>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5>Display Name</h5>
                                        <h5> {item.display_name}</h5>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5>First Name</h5>
                                        <h5> {item.firstname}</h5>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5>Last Name</h5>
                                        <h5> {item.lastname}</h5>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5>Full Name</h5>
                                        <h5> {item.fullname}</h5>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5>Height</h5>
                                        <h5> {item.height}</h5>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5>Weight</h5>
                                        <h5> {item.weight}</h5>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5>Nationality</h5>
                                        <h5> {item.nationality}</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}

export default PlayerSearch