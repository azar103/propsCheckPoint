import React from 'react'
import './Profile.css'
import PropTypes from 'prop-types'
const Profile =(props) => (
    <div className="container">
        <div className="section_image">
        {props.children}
        <button  onClick={() => props.clickHandler(props.fullName)}> Get My Name</button>
        </div>
        <div className="description">
          <h2 style={{fontFamily:"Yellowtail"}}>{props.fullName}</h2>
          <p style={{fontSize: 14, fontStyle:'italic'}}>{props.profession}</p>
          <p>{props.bio}</p>
        </div>
    </div>
)

Profile.defaultProps = {
    fullName: 'Anis Zarrouk'
}

Profile.propTypes = {
    fullName: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired
}

export default Profile;