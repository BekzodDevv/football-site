import { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom'
import Card from '../../components/Card';



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
        <div className="playerStatistika mt-4">
            <div className="container">
                <div className="row bgcolor">
                    <div className="col-md-6 col-sm-6 col-12 mx-auto my-auto text-center">
                        <img src={post.image_path} alt="image_path" className=" img-fluid" />
                    </div>
                    <div className="col-md-6 col-sm-6 col-12 mx-auto">
                        <Card post={post} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerStatistika