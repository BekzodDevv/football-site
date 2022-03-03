import {  useState } from 'react'
import axios from "axios";

// const baseURL = "H0ofT7ADX8Ju2mPZ1E63YXdSDaRsyyX2Dq9Xjx5VvwgF9nBRBRDudElj1IWZ";

const TeamSearch = () => {

    const [image, setImage] = useState(" ");
    const [post, setPost] = useState([]);


    const getValue = (event) => {
        setImage(event.target.value);
    };

    const getImages = () => {
        axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/search/${image}?api_token=${process.env.REACT_APP_API_KEY}`)
            .then((response) => {
                setPost(response.data.data);
            })
    }

  
    return (
        <div>
            <input
                type="text"
                name="image"
                placeholder="Search Teams..."
                onChange={getValue}
            // onKeyDown={getImages}
            />
            <button onClick={getImages} type="submit">Search</button>

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



        </div>
    )
}

export default TeamSearch