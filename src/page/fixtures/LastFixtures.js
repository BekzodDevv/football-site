import { useEffect, useState } from 'react'
import axios from "axios";



const LastFixtures = () => {

    const [post, setPost] = useState([]);
    useEffect(() => {
        axios.get(`https://soccer.sportmonks.com/api/v2.0/fixtures/updates?api_token=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                const data = res.data.data;
                setPost(data)
            })
    }, []);

    console.log(post)

    return (
        <div>LastFixtures

            <div className="row">
                {post.map((item) => (
                    <div key={item.id} className="col-md-3 col-sm-3 col-12">

                        {item.id}




    

                    </div>
                ))}
            </div>


        </div>
    )
}

export default LastFixtures