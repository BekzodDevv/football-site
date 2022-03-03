import { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import Search from './Search';




const Leagues = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        axios.get(`https://soccer.sportmonks.com/api/v2.0/leagues?api_token=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                setPost(res.data.data)
            })
    }, []);


    return (
        <div>

            <Search />


            <div className="row">
                {post.map((item) => (
                    <div key={item.id} className="col-md-3 col-sm-3 col-12">
                        <Link to={`/leaguesid/${item.id}`}>
                            {item.active}
                            {item.country_id}
                            {item.is_cup}
                            {item.is_friendly}
                            {item.legacy_id}
                            {item.live_standings}
                            <img src={item.logo_path} alt="" className="img-fluid" />
                            {item.name}
                            {item.type}
                        </Link>

                    </div>
                ))}
            </div>


        </div>
    )
}

export default Leagues