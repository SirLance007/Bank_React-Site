import { useState } from 'react'
import styles from './style'
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import FeedbackCard from './components/FeedbackCard';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='w-full overflow-hidden'>
        {/* Navbar */}
        <div className= {` bg-black w-full overflow-hidden sm:px-[50px] z-15`}>
          <div>
            <Navbar />
          </div>
        </div>
        {/* Hero Section */}
        <div className= {`bg-black ${styles.flexStart} sm:px-[200px]`}>
          <div className= {`${styles.boxWidth}`}>
              <Hero />
          </div>
        </div>
        {/* Components */}
        <div className= {`bg-black ${styles.flexStart} sm:px-[200px]`}>
          <div className= {`${styles.boxWidth}`}>
              <Business />
              <Billing />
              <CardDeal />
              <Testimonials />
              <Clients />
              <CTA />
              
              <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
