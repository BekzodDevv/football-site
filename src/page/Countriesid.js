import { useEffect, useState } from 'react'
import axios from "axios";
import { useParams, Link } from 'react-router-dom'



const Countriesid = () => {
    const { id } = useParams()
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get(`https://soccer.sportmonks.com/api/v2.0/countries/${id}?api_token=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                setPost(res.data.data)
            })
    }, []);


    return (
        <div className="container">
            <div className="row ">
                <div className="col-md-3 mx-auto ">
                    <div className="text-center">
                        <img src={post.image_path} alt="" className="img-fluid" />
                        <h5 className="mt-3">{post.name}</h5>
                        <div>{post.extra?.continent}</div>
                        <div>{post.extra?.iso}</div>
                        {/* {post.extra?.latitude}
                        {post.extra?.longitude} */}
                        <div>{post.extra?.sub_region}</div>
                        <div>{post.extra?.world_region}</div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between mt-3">
                        <Link to={`/countriesid/${id}/team/${post.id}`}>
                            Team
                        </Link>
                        <Link to={`/countriesid/${id}/players/${post.id}`}>
                            Players
                        </Link>
                    </div>


                </div>




            </div>
        </div>
    )
}

export default Countriesid