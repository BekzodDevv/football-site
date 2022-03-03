import { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';




const Continents = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get(`https://soccer.sportmonks.com/api/v2.0/continents?api_token=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                const data = res.data.data;
                setPost(data)
            })
    }, []);

    console.log(post)
    return (
        <div>
            <div className="row">

                {post.map(({ id, name }) => (
                    <div key={id} className="col-md-3 col-sm-3 col-12">
                        <Link to={`/continents/${id}`}>
                            <p>{name}</p>
                        </Link>
                    </div>
                ))}

            </div>



        </div>
    )
}

export default Continents