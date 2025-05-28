import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';



function App() {
  return (
    <>
    <main className="scroll-container">
      <Navbar />
      <Hero />
      <Features />
    </main>
    <Footer />
    </>

  );
}


export default App
