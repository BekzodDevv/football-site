import { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useParams } from 'react-router-dom'




const LeaguesId = () => {

    const { id } = useParams()
    const [post, setPost] = useState([]);



    useEffect(() => {
        axios.get(`https://soccer.sportmonks.com/api/v2.0/leagues/${id}?api_token=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                const data = res.data.data;
                setPost(data)
            })
            .catch(error => {
                console.log(error);
              })
    }, []);


    return (

        <div className="row">
          
            <div className="col-md-3 col-sm-3 col-12">
                <Link to={`/legincouid/${post.country_id}`}>
                {post.active}
                {/* {post.country_id} */}
                {post.is_cup}
                {post.is_friendly}
                {post.legacy_id}
                {post.live_standings}
                <img src={post.logo_path} alt="" className="img-fluid" />
                {post.name}
                {post.type}
                </Link>


            </div>

            {/* "data": {
        "id": 8,
        "active": true,
        "type": "domestic",
        "legacy_id": 29,
        "country_id": 462,
        "logo_path": "https://cdn.sportmonks.com/images/soccer/leagues/8/8.png",
        "name": "Premier League",
        "is_cup": false,
        "is_friendly": false,
        "current_season_id": 18378,
        "current_round_id": null,
        "current_stage_id": 77453700,
        "live_standings": true,
        "coverage": {
            "predictions": true,
            "topscorer_goals": true,
            "topscorer_assists": true,
            "topscorer_cards": true
        }
    }, */}
        </div>
    )
}

export default LeaguesId