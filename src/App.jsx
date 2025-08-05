import { useState } from 'react'
import './App.css'
import { TailwindBasics } from './TailwindBasics'
import {SamplePortfolio} from './SamplePortfolio'
import { LandingPage } from './LandingPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <TailwindBasics/> */}
    {/* <SamplePortfolio/> */}
    <LandingPage/>
    </>
  )
}

export default App
