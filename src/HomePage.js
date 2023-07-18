import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Why from './components/Why';
import About from './components/About';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Collection from './components/Collection';
import QnA from './components/QnA';
import Footer from './components/Footer';
import Break from './components/Break';

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero id="hero" />
      <Break />
      <Why id="why" />
      <Break />
      <About id="about" />
      <Break />
      <Roadmap id="roadmap" />
      <Break />
      <Team id="team" />
      <Break />
      <Collection id="collection" />
      <Break />
      <QnA id="qna" />
      <Break />
      <Footer />
    </div>
  );
}

export default HomePage;
