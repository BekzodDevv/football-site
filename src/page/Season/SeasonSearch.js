import { useCallback, useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom'



const SeasonSearch = () => {
    const { id } = useParams()
    const [name, setName] = useState(" ");
    const [post, setPost] = useState([]);
  


    // const getImages = () => {
    //     axios.get(`https://soccer.sportmonks.com/api/v2.0/seasons/${id}?api_token=${process.env.REACT_APP_API_KEY}`)
    //         .then((response) => {
    //             setPost(response.data.data);
    //         })
    // }

    // const getValue = useCallback(event => {
    //     setName(event.target.value);
    // }, [name]);




    return (
        <div>
            {/* <div className="d-flex justify-content-center align-items-center">
                <input
                    type="number"
                    name="image"
                    placeholder="Search Teams..."
                    className="form-control"
                    onChange={getValue}
                // onKeyDown={getImages}
                />
                <button onClick={getImages} type="submit">Search</button>
            </div> */}
        </div>
    )
}

export default SeasonSearch