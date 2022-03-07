import { useState } from 'react'
import axios from "axios";


const TeamSearch = () => {
    const [image, setImage] = useState("");
    const [post, setPost] = useState([]);

    const getValue = (event) => {
        setImage(event.target.value);
    };
    const getImages = () => {
        axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/search/${image}?api_token=${process.env.REACT_APP_API_KEY}`)
            // https://soccer.sportmonks.com/api/v2.0/teams/search/manchester?api_token={API_TOKEN}    
            .then(response => {
                setPost(response.data.data);
            })
    }
    console.log(post)

    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <input
                    type="text"
                    name="image"
                    placeholder="Search Teams..."
                    className="form-control"
                    onChange={getValue}
                // onKeyDown={getImages}
                />
                <button onClick={getImages} type="submit">Search</button>
            </div>

            {post.length === 0 ? (
                <div>NO DATA</div>
            ) : (
                <div className="row">
                    {post.map((item) => (
                        <div key={item.id} className="col-md-3 col-sm-3 col-12 mt-3">
                            founded {item.founded}
                            logo_path  <img src={item.logo_path} className="img-fluid" alt="" />
                            name {item.name}
                            short_code {item.short_code}
                            twitter {item.twitter}
                        </div>
                    ))}
                </div>
            )

            }



        </>
    )
}

export default TeamSearch