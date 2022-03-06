import React from 'react'


const Searchch = React.memo(({ getValue, getImages }) => {
    return (
        <div className="d-flex align-items-center justify-content-center my-3">

            <input
                type="text"
                name="image"
                className="form-control w-25"
                placeholder="Search Player..."
                onChange={getValue}
            // onKeyDown={getImages}
            />
            <button onClick={getImages} type="submit" className="btn btn-danger">Search</button>


        </div>
    )
})

export default Searchch
