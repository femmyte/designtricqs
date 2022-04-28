import About from './components/About'
import './App.css'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import Header from './components/Header'
import Nav from './components/Nav'
import Services from './components/Services'

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Services />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
