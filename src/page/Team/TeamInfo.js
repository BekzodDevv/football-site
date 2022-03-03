import { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom'



const TeamInfo = () => {
    const { id } = useParams()
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${id}?api_token=${process.env.REACT_APP_API_KEY}`)
                // https://soccer.sportmonks.com/api/v2.0/teams/939?api_token={API_TOKEN} 
        .then(res => {
                setPost(res.data.data)
            })
    }, []);

    return (
        <div className="row">
                <div className="col-md-3 col-sm-3 col-12">
                {post.country_id}
                          {post.current_season_id}
                          {post.founded}
                          {post.is_placeholder}
                          {post.name}
                          {post.national_team}
                          {post.short_code}
                           {post.twitter}
                           {post.venue_id}
                           <img src={post.logo_path} alt="" />

                </div>
        </div>
    )
}

export default TeamInfo