import Navbar from './components/navbar/navbar'
import Intro from './components/intro/intro'
import Skills from './components/skills/skills'
import Projects from './components/projects/projects'
import Contact from './components/contact/contact'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
