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
        <div className="row">
 {/* /countriesid/:id/players/:id */}
                <div className="col-md-3 col-sm-3 col-12">
 <Link to={`/countriesid/${id}/players/${post.id}`}> 
                        <img src={post.image_path} alt="" />
                        <h5>{post.name}</h5>
 </Link>

                        {post.extra?.continent}
                        <img src={post.extra?.flag} alt="" />
                        {post.extra?.iso}
                        <Link to={`/countriesid/${id}/team/${post.id}`}> 
                        {post.extra?.iso2}
                        {post.extra?.latitude}
                        {post.extra?.longitude}
                        {post.extra?.sub_region}
                        {post.extra?.world_region}
                        </Link>

                 
                </div>




        </div>
    )
}

export default Countriesid