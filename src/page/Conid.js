import { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom'




const Conid = () => {
    const { id } = useParams()
    const [post, setPost] = useState([]);

  

    useEffect(() => {
        axios.get(`https://soccer.sportmonks.com/api/v2.0/continents/${id}?api_token=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                const data = res.data.data;
                setPost(data)
            })
    }, []);



    return (
        <div>


<p>{post.name}</p>                    
            {/* {post.map(({ id, name }) => (
                <div key={id} className="col-md-3 col-sm-3 col-12">
                </div>
            ))} */}




        </div>
    )
}

export default Conid