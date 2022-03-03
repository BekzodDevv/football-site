import { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useParams } from 'react-router-dom'
import PlayerSearch from "./PlayerSearch";


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
        <div className="row">

            <PlayerSearch />

            <div className="col-md-3 col-sm-3 col-12">
                {post.map((item, index) => (
                    <div key={index}>
                        <Link to={`/countriesid/:id/players/:id/statistike/${item.player_id}`}>
                            <h1>{item.player_id}</h1>
                            {item.birthcountry}
                            {item.birthdate}
                            {item.birthplace}
                            {item.common_name}
                            {item.country_id}
                            {item.display_name}
                            {item.firstname}
                            {item.lastname}
                            {item.fullname}
                            {item.height}
                            {item.weight}
                            {item.nationality}
                            <img src={item.image_path} alt="" />
                        </Link>

                    </div>
                ))}



            </div>
        </div>
    )
}

export default Players