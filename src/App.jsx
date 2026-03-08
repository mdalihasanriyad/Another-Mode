
import { Suspense } from 'react'
import NavBar from './components/NavBar'
import PricingOption from './components/PricingOption'

const pricingData = fetch('pricing.json').then(res => res.json())

function App() {

  

  return (
    <>
    <header>
      <NavBar/>
    </header>
    <main>
        <Suspense fallback={<div>Loading...</div>}>
           <PricingOption pricingData={pricingData}></PricingOption>
        </Suspense>
    </main>
    </>
  )
}

export default App
