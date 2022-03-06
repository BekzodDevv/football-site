import { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';





const Countries = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        axios.get(`https://soccer.sportmonks.com/api/v2.0/countries?api_token=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                const data = res.data.data;
                setPost(data)
            })
    }, []);

    return (
        <div className="container countries">
            <div className="row">
                {post.map((item) => (
                    <div key={item.id} className="col-xl-3 col-md-4 col-sm-6 col-12">
                        <Link to={`/countriesid/${item.id}`}>
                            <div className="row mt-2">
                                <div className="col-md-6 my-auto">
                                    <img src={item.image_path} alt="logo" className="img-fluid my-auto" />
                                </div>
                                <div className="col-md-6 mt-2">
                                    <h5>{item.name}</h5>
                                    <div>{item.extra?.continent}</div>
                                    <div>{item.extra?.iso}</div>
                                    {/* {item.extra?.latitude} */}
                                    {/* <div>{item.extra?.longitude}</div> */}
                                    <div>{item.extra?.world_region}</div>
                                </div>
                            </div>

                        </Link>
                    </div>
                ))}
            </div>


        </div >
    )
}

export default Countries