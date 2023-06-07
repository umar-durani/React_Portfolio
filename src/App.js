
import './App.css';
import Home from './component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './component/About';
import Services from './component/Services';
import Project from './component/Project';
import Blog from './component/Blog';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <div className='app'>
        <Home />
        <About />
        <Services />
        <Project />
        <Blog />
        <Contact />
        <Footer />
      </div>

    </>
  );
}

export default App;
