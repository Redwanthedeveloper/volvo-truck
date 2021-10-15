import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/vertical.css';
import content from '../../content';
import './HomeSlider.css';

const HomeSlider = () => {
  return (
    <>
      <Slider direction='vetical'>
        {content.map((item, index) => (
          <div
            key={index}
            style={{
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url('${item.image}') no-repeat center center`,
            }}
          >
            <div className='center container slider_content'>
              <h1 className='slider_title'> {item.title} </h1>
              <p className='slider_description'> {item.description} </p>
              <div className='btn_wrapper'>
                <div className='btn_line'></div>
                <a href='/' className='btn'>
                  {' '}
                  {item.button}{' '}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default HomeSlider;
