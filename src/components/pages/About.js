//About me is presented first by default with photo and short bio
import React from 'react';
import Lauraimage from '../images/mypic.jpg';

const styles = {
  aboutStyle: {
    background: '#70CE4E',
  },
};

export default function About() {
  // from render element lesson notes must hav JSX 
  return (
      <nav style={styles.aboutStyle} className="aboutpage">
      <div className="container">
      <div className = "lauraimage">
          <img src = {Lauraimage} alt="lauraimage" style ={{
                                       display: 'block',
                                       marginLeft: 'auto',
                                       marginRight: 'auto',
                                       border: '10px solid purple',
                                       boxshawdow: '10px 10px',
                                       radius: '25px',
                                       marginTop: '5px',
                                       marginBottom: '5px',
                                       width:'30%', 
                                       height:'30%'
                              
          }}></img>
      <h3>About Me</h3>
      <nav style={styles.meStyle}></nav>
      <ul className="About">
        <p>Wherever I can I love to make differences in peoples lives, it is the clock ticker in me.</p>
        <p>I am a regular person that strives to live life everyday with purpose. Most people would say that I am detail orientated and resourceful.</p>
        <p>Web development has been a big part of my life and it wasn't until now that I took it to the next level.</p> 
        <p>I am a business owner and will always look to a life work balance and meaningful goals!</p>
      </ul>
     </div>
     </nav>
  )
}
