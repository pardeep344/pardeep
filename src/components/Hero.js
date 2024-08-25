import React from 'react'
import"./Herostyle.css";
function Hero(props) {
  return (
     <>
        <div className={props.cName}>
            <img alt="heroimg" src={props.heroImg}/>
            <div className='hero-text'>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href={props.Url} className={props.btnClass}>
                {props.buttonText}
            </a>
            </div>
        </div>
     </>

     
  )
}
 export default Hero;