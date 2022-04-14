import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../images/banner/banner1.jpg'
import img2 from '../../../images/banner/banner2.jpg'
import img3 from '../../../images/banner/banner3.jpg'
const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src= {img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                      
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src= {img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src= {img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                     
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;