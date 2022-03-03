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
        <div className="container">

            <div className="row">
                {post.map((item) => (
                    <div key={item.id} className="col-md-3 col-sm-3 col-12">
                        <Link to={`/countriesid/${item.id}`}>

                            {/* <img src={item.image_path} alt="" /> */}
                            <h5>{item.name}</h5>

                            {item.extra?.continent}
                            <img src={item.extra?.flag} alt="" />
                            {item.extra?.iso}

                            {item.extra?.iso2}
                            {item.extra?.latitude}
                            {item.extra?.longitude}
                            {item.extra?.sub_region}
                            {item.extra?.world_region}

                        </Link>
                    </div>
                ))}
            </div>


        </div >
    )
}

export default Countries