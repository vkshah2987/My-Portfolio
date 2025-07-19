import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components'
import { DotGrid } from './components/canvas'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 primaryColor'>
        <DotGrid
          dotSize={3}
          gap={55}
          baseColor="#0E2F3F"
          activeColor="#EDB43C"
          proximity={200}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
        <div>
          <div className="bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            {/* <StarsCanvas /> */}
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
