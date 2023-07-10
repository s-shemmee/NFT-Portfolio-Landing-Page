import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Why from './components/Why';
import About from './components/About';
import Break from './components/Break';

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Break />
      <Why />
      <Break /> 
      <About />
      <Break />
    </div>
  );
}

export default HomePage;
