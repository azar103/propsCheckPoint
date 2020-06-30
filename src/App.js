import React, { Children } from 'react';

import './App.css';
import Profile from './profile/Profile';
import avatar from '../src/avatar.jpg'
const clickHandler = (name) => {
  alert(`Hello ${name}`)
}
function App() {
  return (
      <Profile
        bio = "J'aime le developpement et je cherche ma premiére opportunité de travail."
        profession = "Develppeur FullStack js"
        clickHandler= {clickHandler}
      >
       <img src={avatar}  className="myImg"/>
      </Profile>
  );
}

export default App;
