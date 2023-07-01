
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbartop from './components/Navbar';
import HeroImg from './components/Hero';
import Main from './components/Main';
import Projects from './components/projects';
import Contact from './components/contact';


function App() {
  return (
    <div className="App">
      <Navbartop />
      <HeroImg />
      <Main />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
