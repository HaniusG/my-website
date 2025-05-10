import React from 'react'
import Landing from '../components/Landing' 
import Projects from '../components/Projects'
import Works from '../components/Work'
import Header from '../../../components/Header'
import Contact from '../../../components/Contact'


const Home = () => {
  return (
    <div>
      <Header/>
      <Landing/>
      <Projects/>
      <Works/>
      <Contact/>
    </div>
  )
}

export default Home