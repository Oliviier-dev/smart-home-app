import './App.css'
import Header from './components/Header'
import About from './components/About'
import Clients from './components/Clients'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import DownloadApp from './components/DownloadApp'
import Subscribe from './components/Subscribe'

function App() {

  return (
    <div className="App">
      <Header />
      <About />
      <Clients />
      <Testimonials/>
      <FAQ/>
      <DownloadApp/>
      <Subscribe />
    </div>
  )
}

export default App
