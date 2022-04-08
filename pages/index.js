import Head from 'next/head'

import Hero from '../components/Hero'
import Showcase from '../components/Showcase'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Hero />
      <Showcase />
      <Projects />
      <Footer />


    </div>
  )
}

export default Home
