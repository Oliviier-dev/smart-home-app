import './App.css'
import Header from './components/Header'
import About from './components/About'
import Clients from './components/Clients'
import Testimonials from './components/Testimonials'

function App() {

  return (
    <div className="App">
      <Header />
      <About />
      <Clients />
      <Testimonials/>
    </div>
  )
}

export default App
