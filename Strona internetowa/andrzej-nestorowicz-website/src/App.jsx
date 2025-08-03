import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Concerts from './components/Concerts'
import Media from './components/Media'
import Shop from './components/Shop'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
return (
  <div className="min-h-screen">
  <Header />
  <main>
    <Hero />
    <About />
    <Concerts />
    <Media />
    <Shop />
    <Contact />
  </main>
  <Footer />
</div>
)
}

export default App

