import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import './Hero.css';

export default function Hero() {

  return (
    <section className="hero">
      <div className="container-fluid">
        <div className="svg-wrapper-top svg-left-top">
          <svg width="32" height="32" viewBox="0 0 72 72" fill="#9351f7" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 0L38.35 7.48C42.27 19.96 52.04 29.73 64.52 33.65L72 36L64.99 38.11C52.25 41.94 42.25 51.86 38.31 64.56L36 72L33.93 65.04C30.08 52.06 19.93 41.91 6.96 38.06L0 36L7.48 33.65C19.96 29.73 29.73 19.96 33.65 7.48L36 0Z" />
          </svg>
        </div>
        <div className="svg-wrapper-top svg-right-top">
          <svg width="32" height="32" viewBox="0 0 72 72" fill="#9351f7" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 0L38.35 7.48C42.27 19.96 52.04 29.73 64.52 33.65L72 36L64.99 38.11C52.25 41.94 42.25 51.86 38.31 64.56L36 72L33.93 65.04C30.08 52.06 19.93 41.91 6.96 38.06L0 36L7.48 33.65C19.96 29.73 29.73 19.96 33.65 7.48L36 0Z" />
          </svg>
        </div>
        <div className="svg-wrapper-bottom svg-left-bottom">
          <svg width="62" height="62" viewBox="0 0 72 72" fill="#9351f7" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 0L38.35 7.48C42.27 19.96 52.04 29.73 64.52 33.65L72 36L64.99 38.11C52.25 41.94 42.25 51.86 38.31 64.56L36 72L33.93 65.04C30.08 52.06 19.93 41.91 6.96 38.06L0 36L7.48 33.65C19.96 29.73 29.73 19.96 33.65 7.48L36 0Z" />
          </svg>
        </div>
        <div className="svg-wrapper-bottom svg-right-bottom">
          <svg width="62" height="62" viewBox="0 0 72 72" fill="#9351f7" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 0L38.35 7.48C42.27 19.96 52.04 29.73 64.52 33.65L72 36L64.99 38.11C52.25 41.94 42.25 51.86 38.31 64.56L36 72L33.93 65.04C30.08 52.06 19.93 41.91 6.96 38.06L0 36L7.48 33.65C19.96 29.73 29.73 19.96 33.65 7.48L36 0Z" />
          </svg>
        </div>
        <div className="content">
          <h1>collect & sell<br /><span>super rare nfts</span></h1>

          <div className="container panel">
            <div className="row">
              <div className="col">
                <img className="img secondary-image" src={require('../images/01.jpg')} alt="01" />
              </div>
              <div className="col">
                <img className="img tertiary-image" src={require('../images/02.jpg')} alt="02" />
                <img className="img tertiary-image" src={require('../images/03.jpg')} alt="03" />
              </div>
              <div className="col">
                <img className="img main-image" src={require('../images/04.jpg')} alt="04" />
              </div>
              <div className="col">
                <img className="img tertiary-image" src={require('../images/05.jpg')} alt="05" />
                <img className="img tertiary-image" src={require('../images/06.jpg')} alt="06" />
              </div>
              <div className="col">
                <img className="img secondary-image" src={require('../images/07.jpg')} alt="07" />
              </div>
            </div>
          </div>
    
        </div>
      </div>
    </section>
  );
};
