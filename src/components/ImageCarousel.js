import React from 'react';
import styled from 'styled-components';

const ImageCarousel = () => {
  return (
    <ImageCarouselDiv className = "mt-5">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="images/Banner_Wedding.jpeg" alt="desktop" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="images/Desktop_Banners-2.png" alt="desktop"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="images/Dekstop_banner_24hourshipping.jpeg" alt="desktop"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </ImageCarouselDiv>
  );
}

var ImageCarouselDiv =  styled.div`
  max-width: 100%;
  margin: auto;
  cursor: pointer;
`
export default ImageCarousel