import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Why from './components/Why';
import About from './components/About';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Collection from './components/Collection';
import QnA from './components/QnA'; 
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
      <Roadmap />
      <Break />
      <Team />
      <Break />
      <Collection />
      <Break />
      <QnA />
      <Break />
    </div>
  );
}

export default HomePage;
