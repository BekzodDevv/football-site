import React from 'react'



const Card = ({ post }) => {
    return (
        <div>Card
            <div className="d-flex justify-content-between align-items-center">
                <h5>Birth Country</h5>
                <h5> {post.birthcountry}</h5>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <h5>Birth Date</h5>
                <h5> {post.birthdate}</h5>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <h5>Birth Place</h5>
                <h5> {post.birthplace}</h5>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <h5>Common Name</h5>
                <h5> {post.common_name}</h5>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <h5>First Name</h5>
                <h5> {post.firstname}</h5>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <h5>Full Name</h5>
                <h5> {post.fullname}</h5>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <h5>Height</h5>
                <h5> {post.height}</h5>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <h5>Weight</h5>
                <h5> {post.weight}</h5>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <h5>Nationality</h5>
                <h5> {post.nationality}</h5>
            </div>



        </div>
    )
}

export default Card