import { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom'



const LegInCouId = () => {

    const { id } = useParams()
    const [post, setPost] = useState([]);



    useEffect(() => {
        axios.get(`https://soccer.sportmonks.com/api/v2.0/countries/${id}/leagues?api_token=${process.env.REACT_APP_API_KEY}`)
            // https://soccer.sportmonks.com/api/v2.0/countries/{ID}/leagues
            // https://soccer.sportmonks.com/api/v2.0/countries/462/leagues?api_token={API_TOKEN}
            // https://soccer.sportmonks.com/api/v2.0/countries/462/leagues?api_token=H0ofT7ADX8Ju2mPZ1E63YXdSDaRsyyX2Dq9Xjx5VvwgF9nBRBRDudElj1IWZ
            // https://soccer.sportmonks.com/api/v2.0/leagues/8?api_token={API_TOKEN}
            .then(res => {
                const data = res.data.data;
                setPost(data)
            })
    }, []);



    return (
        <div>

            <div className="row">
                {post.map((item) => (
                    <div key={item.id} className="col-md-3 col-sm-3 col-12">
                            {item.active}
                            {item.country_id}
                            {item.is_cup}
                            {item.is_friendly}
                            {item.legacy_id}
                            {item.live_standings}
                            <img src={item.logo_path} alt="" className="img-fluid" />
                            {item.name}
                            {item.type}
                    </div>
                ))}
            </div>




            {/* active: true
            country_id: 320
            coverage: {predictions: true, topscorer_goals: true, topscorer_assists: true, topscorer_cards: true}
            current_round_id: 251750
            current_season_id: 18334
            current_stage_id: 77453568
            id: 271
            is_cup: false
            is_friendly: false
            legacy_id: 43
            live_standings: true
            logo_path: "https://cdn.sportmonks.com/images/soccer/leagues/271.png"
            name: "Superliga"
            type: "domestic" */}



        </div>
    )
}

export default LegInCouId