import { BrowserRouter, Routes, Route} from "react-router-dom";

import { About, Experience, Hero, Navbar, Tech, Works } from "./components";




const App = () => {
  return (
      <div className='relative z-0 bg-black'>
        <div className='bg-top-wallpaper bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
      </div>

  );
}



export default App;