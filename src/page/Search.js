import React, { useState } from 'react'
import axios from "axios";



const Search = () => {

  const [image, setImage] = useState("");
  const [post, setPost] = useState([]);

  const getValue = (event) => {
    setImage(event.target.value);
  };

  const getImages = () => {
    axios.get(`https://soccer.sportmonks.com/api/v2.0/leagues/search/${image}?api_token=${process.env.REACT_APP_API_KEY}`)
      .then((response) => {
        setPost(response.data.data);
      })
  }



  return (
    <div>
      <input
        type="text"
        name="image"
        placeholder="Search images..."
        onChange={getValue}
        onKeyDown={getImages}
      />
      <button onClick={getImages} type="submit">Search</button>

      <div className="row">
        {post.map((item) => (
          <div key={item.id} className="col-md-3 col-sm-3 col-12">
            {item.active}
            {item.country_id}
            {item.is_cup}
            {item.is_friendly}
            {item.legacy_id}
            {item.live_standings}
            <img src={item.logo_path} alt="" className="img-fluid" />
            {item.name}
            {item.type}
          </div>
        ))}
      </div>




    </div>
  )
}

export default Search