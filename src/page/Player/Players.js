import { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useParams } from 'react-router-dom'
import PlayerSearch from "./PlayerSearch";
import Card from '../../components/Card';


const Players = () => {
    const { id } = useParams()
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get(`https://soccer.sportmonks.com/api/v2.0/countries/${id}/players?api_token=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                setPost(res.data.data)
            })
    }, []);


    return (
        <div className="container">
            <PlayerSearch />
            <div className="row mx-auto">
                {post.map((post, index) => (
                    <div className="col-md-4 col-sm-6 col-12   mt-5">
                        <div key={index} className="mx-auto">
                            <Link to={`/countriesid/:id/players/:id/statistike/${post.player_id}`}>
                                <div className="text-center">
                                    <img src={post.image_path} alt="image_path" className="img-fluid " />
                                </div>
                                <div className="mt-3">
                                   <Card post={post} />
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Players