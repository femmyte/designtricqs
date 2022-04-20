import About from './About'
import './App.css'
import Portfolio from './components/Portfolio'
import Header from './Header'
import Nav from './Nav'
import Services from './Services'

function App() {
  return (
    <div className='App'>
      <Nav />
      <Header />
      <Services />
      <About />
      <Portfolio />
    </div>
  )
}

export default App
