import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  return (
    <Carousel fade >
    <Carousel.Item style={{height:500}}>
      <img
        className="d-block w-100 "
        src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQzfHxzaG9wcGluZyUyMGZhc2hpb24lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="First slide"
      />
      <Carousel.Caption>
  
        <p style={{ color: "darkgreen", fontSize:50, fontFamily:'cursive' }}>Never Go Out Of Fashion</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item style={{height:500}}> 
      <img
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1672404052115-c720b5cc9357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA1fHxzaG9wcGluZyUyMGZhc2hpb24lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="Second slide"
      />

      <Carousel.Caption>
      <p style={{ color: "darkgreen", fontSize:50 , fontFamily:'cursive'}}>Never Go Out Of Fashion</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item style={{height:500}}>
      <img
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1526857240824-92be52581d9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjU0fHxzaG9wcGluZyUyMGZhc2hpb24lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="Third slide"
      />

      <Carousel.Caption>
      <p style={{ color: "darkgreen", fontSize:50, fontFamily:'cursive' }}>Never Go Out Of Fashion</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Slider