import logo from '../images/logo.svg';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState, useEffect } from 'react';
import BreakSVG from '../images/break.svg';

import './Hero.css';

export default function Hero() {

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="hero">

      <div className="container-fluid">
        
      <header className={`d-flex flex-wrap align-items-center justify-content-center  py-3 mb-4 ${isSticky ? 'sticky' : ''}`}>
        <div className="col-md-3 mb-2 mb-md-0">
          <a href="/" className="d-inline-flex link-body-emphasis">
            <img src={logo} alt="Logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li className="nav-item">
            <button className="nav-link px-2">About</button>
          </li>
          <li className="nav-item">
            <button className="nav-link px-2">Roadmap</button>
          </li>
          <li className="nav-item">
            <button className="nav-link px-2">Team</button>
          </li>
          <li className="nav-item">
            <button className="nav-link px-2">Collection</button>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <a href="https://twitter.com" className="btn btn-outline-primary me-2">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="https://discord.com" className="btn btn-primary">
            <i className="bi bi-discord"></i>
          </a>
        </div>
      </header>
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
        <svg width="72" height="72" viewBox="0 0 72 72" fill="#9351f7" xmlns="http://www.w3.org/2000/svg">
          <path d="M36 0L38.35 7.48C42.27 19.96 52.04 29.73 64.52 33.65L72 36L64.99 38.11C52.25 41.94 42.25 51.86 38.31 64.56L36 72L33.93 65.04C30.08 52.06 19.93 41.91 6.96 38.06L0 36L7.48 33.65C19.96 29.73 29.73 19.96 33.65 7.48L36 0Z" />
        </svg>
      </div>
      <div className="svg-wrapper-bottom svg-right-bottom">
        <svg width="72" height="72" viewBox="0 0 72 72" fill="#9351f7" xmlns="http://www.w3.org/2000/svg">
          <path d="M36 0L38.35 7.48C42.27 19.96 52.04 29.73 64.52 33.65L72 36L64.99 38.11C52.25 41.94 42.25 51.86 38.31 64.56L36 72L33.93 65.04C30.08 52.06 19.93 41.91 6.96 38.06L0 36L7.48 33.65C19.96 29.73 29.73 19.96 33.65 7.48L36 0Z" />
        </svg>
      </div>
        <div className="content">
          <h1>collect & sell<br /><span>super rare nfts</span></h1>

          <div className="container panels">
            <div className="row">
              <div className="col panel sec-image">
                <img className="img-fluid" src={require('../images/01.jpg')} alt="01" />
              </div>
              <div className="col panel thr-image">
                <img className="img-fluid" src={require('../images/02.jpg')} alt="02" />
                <img className="img-fluid" src={require('../images/03.jpg')} alt="03" />
              </div>
              <div className="col panel thr-image">
                <img className="img-fluid main-image" src={require('../images/04.jpg')} alt="04" />
              </div>
              <div className="col panel">
                <img className="img-fluid" src={require('../images/05.jpg')} alt="05" />
                <img className="img-fluid" src={require('../images/06.jpg')} alt="06" />
              </div>
              <div className="col panel sec-image">
                <img className="img-fluid" src={require('../images/07.jpg')} alt="07" />
              </div>
            </div>
          </div>
          
          <object data={BreakSVG} type="image/svg+xml" className='break'>
            <img src={require('../images/break.svg')} alt="break" />
          </object>

        </div>
      </div>

      <div className="container">
        <div className="content-2">
          <h2>WHY <span>CHOOSE US?</span></h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className="card-icon">
                      <i className="bi bi-wallet2"></i>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">CONNECT YOUR WALLET</h5>
                      <p className="card-text">Use Trust Wallet, Metamask or to connect to the app.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className="card-icon">
                    <i className="bi bi-check2-square"></i>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">SELECT YOUR QUANTITY</h5>
                      <p className="card-text">Upload your NFTs and set a title, description and price.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className="card-icon">
                    <i className="bi bi-lightning"></i>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">CONFIRM TRANSACTION</h5>
                      <p className="card-text">Earn ETH all your NFTs that you sell on our marketplace.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row justify-content-center">
                <div className="col-md-12">
                <img className="img-fluid" src={require('../images/land-cta.png')} alt="center-img"/>          
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className="card-icon">
                    <i className="bi bi-brush"></i>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">RECEIVE YOUR OWN NFTS</h5>
                      <p className="card-text">Invest and manage all your NFTs at one place on one platform.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className="card-icon">
                    <i className="bi bi-coin"></i>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">TAKE A MARKET TO SELL</h5>
                      <p className="card-text">Discover, collect the right NFT collections to buy or sell.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className="card-icon">
                    <i className="bi bi-boxes"></i>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">DRIVE YOUR COLLECTION</h5>
                      <p className="card-text">We make it easy to Discover, Invest and manage.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <object data={BreakSVG} type="image/svg+xml" className='break'>
            <img src={require('../images/break.svg')} alt="break" />
          </object>

        </div>
      </div>

    </section>
  );
};
