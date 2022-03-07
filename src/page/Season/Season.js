import { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';


const Season = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get(`https://soccer.sportmonks.com/api/v2.0/seasons?api_token=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                setPost(res.data.data)
            })
    }, []);


    return (
        <div className="container">
            <div className=" row">
                {post.map((item) => (
                    <div key={item.id} className="col-md-4 col-sm-6 col-12 text-center  mt-4">
                        <Link to={`/seasonsearch/${item.id}`} className="col-md-4">
                            {item.name}
                        </Link>
                        <br />
                        <Link to={`/seasonteam/${item.id}`} className="col-md-4">
                            teammsss
                        </Link>
                    </ div>
                ))}
            </div>
        </div >
    )
}

export default Season