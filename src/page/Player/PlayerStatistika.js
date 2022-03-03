import { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom'



const PlayerStatistika = () => {

    const { id } = useParams()
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get(`https://soccer.sportmonks.com/api/v2.0/players/${id}?api_token=${process.env.REACT_APP_API_KEY}&include=stats&seasons=16264`)
            // https://soccer.sportmonks.com/api/v2.0/players/31000?api_token={API_TOKEN}&include=stats&seasons=16264
            .then(res => {
                setPost(res.data.data)
            })
    }, []);


    return (
        <div className="playerStatistika">
            <div className="container">
                <div className="row bgcolor">
                    <div className="col-md-2 col-sm-2 col-2 mx-auto">

                        image_path  <img src={post.image_path} alt="" />
                    </div>
                    <div className="col-md-2 col-sm-2 col-2 mx-auto">

                        birthcountry{post.birthcountry}
                        birthdate {post.birthdate}
                        birthplace   {post.birthplace}
                        common_name   {post.common_name}
                        firstname   {post.firstname}
                        fullname   {post.fullname}
                        height   {post.height}
                        weight  {post.weight}
                        nationality     {post.nationality}
                    </div>
                </div>
            </div>






            {/* birthcountry: "Poland"
            birthdate: "18/04/1985"
            birthplace: "Kostrzyn nad Odrą"
            common_name: "Ł. Fabiański"
            country_id: 2
            display_name: "Łukasz Fabiański"
            firstname: "Łukasz"
            fullname: "Łukasz Fabiański"
            height: "190 cm"
            image_path: "https://cdn.sportmonks.com/images/soccer/players/29/733.png"
            lastname: "Fabiański"
            nationality: "Poland"
            player_id: 733
            position_id: 1
            stats: {data: Array(0)}
            team_id: 1
            weight: "83 kg" */}

        </div>
    )
}

export default PlayerStatistika