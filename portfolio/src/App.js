
import './App.css';
import Navbar from './components/Navbar';
import HeroImg from './components/Hero';
import Main from './components/Main';
import Projects from './components/projects';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroImg />
      <Main />
      <Projects />
    </div>
  );
}

export default App;
