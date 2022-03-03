import { useState, useCallback, useMemo } from 'react'
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
        <div className="row">


            <Searchch getValue={getValue} getImages={getImages} />

            <div className="col-md-3 col-sm-3 col-12">
                {post.map((item, index) => (
                    <div key={index}>
                        <Link to={`/countriesid/:id/players/:id/statistike/${item.player_id}`}>
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

export default PlayerSearch