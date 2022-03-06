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
        <>

            <Search />


            <div className="leagues row container mx-auto mt-4">
                {post.map((item) => (
                    <div key={item.id} className="leagues__card col-md-6 col-sm-6 col-12">
                        <Link to={`/leaguesid/${item.id}`}>
                            {item.active}
                            {item.is_cup}
                            {item.is_friendly}
                            {item.live_standings}
                            <div className="mx-auto text-center">
                                <img src={item.logo_path} alt="name" className="leagues__image img-fluid" />
                            </div>
                            <div className="text-center my-3">
                                {item.name}
                            </div>
                            <div className="text-center">
                                {item.type}
                            </div>
                        </Link>

                    </div>
                ))}
            </div>


        </>
    )
}

export default Leagues