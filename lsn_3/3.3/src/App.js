'use strict';

import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class extends React.Component {
    render() {
        return (
            <div style={{width: '50%',
                margin: 'auto',
                marginTop: '75px',
                padding:'100px',


            }}>
            <CarouselProvider
                naturalSlideWidth={70}
                naturalSlideHeight={30}
                totalSlides={4}
                touchEnabled={true}
                visibleSlides={1}
            >
                <Slider style={{
                    borderRadius:'25px',
                    boxShadow: '0px 2px 5px 0px rgba(0,0,0,0.75)'
                }}>
                    <Slide index={0}><img src="https://images.pexels.com/photos/7653/pexels-photo.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/></Slide>
                    <Slide index={1}><img src="https://images.pexels.com/photos/7919/pexels-photo.jpg?w=940&h=650&auto=compress&cs=tinysrgb"/></Slide>
                    <Slide index={2}><img src="https://images.pexels.com/photos/152536/pexels-photo-152536.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/></Slide>
                    <Slide index={2}><img src="https://images.pexels.com/photos/172878/pexels-photo-172878.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/></Slide>
                </Slider>
                <ButtonBack style={{
                    position: 'relative',
                    bottom: '160px',
                    right: '50px',

                    padding: '10px 20px 10px 20px',
                    border: 'none',
                    background: 'rgba(0, 0, 0, 0.8)',
                    color: '#fff',
                    fontSize: '16px',
                    borderRadius:'7px',
                    boxShadow: '0px 2px 5px 0px rgba(0,0,0,0.75)'
                }}>Back</ButtonBack>
                <ButtonNext style={{
                    float: 'right',
                    position: 'relative',
                    bottom: '160px',
                    left: '50px',
                    padding: '10px 20px 10px 20px',
                    border: 'none',
                    background: 'rgba(0, 0, 0, 0.8)',
                    color: '#fff',
                    fontSize: '16px',
                    borderRadius:'7px',
                    boxShadow: '0px 2px 5px 0px rgba(0,0,0,0.75)'
                }}>Next</ButtonNext>
            </CarouselProvider>
            </div>
        );
    }
}