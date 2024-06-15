import React from 'react'
import { Carousel} from 'react-bootstrap'
import { ADS } from '../../Data'


const AdList = () => {
  return (
    <div>
      <Carousel indicators={false} interval={2800} controls={false}>
      {ADS.map((el) => (
      <Carousel.Item key={Math.random()}>
      <img className="d-block w-100" 
      src={el} 
      alt="First slide" 
      style={{width:"auto",height:"800px"}}
     />
      </Carousel.Item> 
      ))}
      </Carousel>
    </div>
  )
}

export default AdList