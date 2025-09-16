import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Team from './components/Team';
import Repositories from './components/Repositories';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="animated-bg" />
      <div className="particles" />
      <Header />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Team />
        <Repositories />
      </main>
      <Footer />
    </div>
  );
}

export default App;