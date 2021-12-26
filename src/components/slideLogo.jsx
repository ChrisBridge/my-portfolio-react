import React, { Component } from 'react'
import  'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

// import ImageOne from '../img/box-1.png'
// import ImageTwo from '../img/box-2.png'
// import ImageTree from '../img/box-3.png'
import { FaApplePay } from 'react-icons/fa';



const slideImages = [
    {
      url: <FaApplePay />,
      caption: 'Slide 1'
    },
    {
      url: <FaApplePay />,
      caption: 'Slide 2'
    },
    {
      url: <FaApplePay />,
      caption: 'Slide 3'
    },
  ];

export default class slideLogo extends Component {
    render() {
        return (
        <div className="slide-container">
            <Slide>
             {slideImages.map((slideImage, index)=> (
                <div className="each-slide" key={index}>
                  <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                    <span>{slideImage.caption}</span>
                  </div>
                </div>
              ))} 
            </Slide>
        </div>
        )
    }
}
