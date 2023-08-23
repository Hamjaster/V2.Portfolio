import './index.css';
import Ask from './pages/Ask';
import { MyContext } from './context/ContextProvider'
import { useContext } from 'react'
import Footer from "./pages/Footer"
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ParticlesComponent from './components/Particles';

function App() {
  const { theme } = useContext(MyContext)
  // eslint-disable-next-line
  const themes = [
    'bg-red-700',
    'bg-purple-700',
    'bg-blue-700',
    'bg-green-700',
    'bg-black-700',
    'bg-pink-700',

    'bg-red-400',
    'bg-purple-400',
    'bg-blue-400',
    'bg-green-400',
    'bg-black-400',
    'bg-pink-400',

    'hover:bg-red-800',
    'hover:bg-purple-800',
    'hover:bg-blue-800',
    'hover:bg-green-800',
    'hover:bg-black-800',
    'hover:bg-pink-800',

    'text-red-700',
    'text-pink-700',
    'text-purple-700',
    'text-blue-700',
    'text-green-700',
    'text-black-700',

    'hover:text-red-700',
    'hover:text-pink-700',
    'hover:text-purple-700',
    'hover:text-blue-700',
    'hover:text-green-700',
    'hover:text-black-700',

    "ring-red-600",
    "ring-pink-600",
    "ring-purple-600",
    "ring-blue-600",
    "ring-green-600",
    "ring-black-600",

    'after:bg-red-700',
    'after:bg-pink-700',
    'after:bg-purple-700',
    'after:bg-blue-700',
    'after:bg-green-700',
    'after:bg-black-700',


    'group-hover:text-red-700',
    'group-hover:text-pink-700',
    'hover:bg-red-700',
    'hover:bg-pink-700',
    'group-hover:text-purple-700',
    'hover:bg-purple-700',
    'group-hover:text-blue-700',
    'hover:bg-blue-700',
    'group-hover:text-green-700',
    'hover:bg-green-700',
    'group-hover:text-black-700',
    'hover:bg-black-700',

  ]

  return (
    <div className="App overflow-x-hidden">


      {theme
        ? (
          <>
            <div className='absolute z-10 opacity-75'>
              <ParticlesComponent />
            </div>
            <LandingPage />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </>
        )
        : (<Ask />)
      }

    </div>
  );
}

export default App;
