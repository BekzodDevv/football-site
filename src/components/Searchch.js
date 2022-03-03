import React from 'react'


const Searchch =  React.memo(({ getValue, getImages}) => {
    return (
        <div className="row">

<input
                type="text"
                name="image"
                placeholder="Search Teams..."
                onChange={getValue}
            // onKeyDown={getImages}
            />
            <button onClick={getImages} type="submit">Search</button>
      
      
        </div>
    )
})

export default Searchch
