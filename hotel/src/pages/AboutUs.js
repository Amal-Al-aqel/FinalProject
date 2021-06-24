import React from 'react'
import {Header} from '../components/home/Header'
import {About} from '../components/home/About'
import Rooms from '../components/home/Rooms'
import GlobalStyles from '../components/globals/GlobalStyles'
import {NavBar} from '../components/globals/NavBar'

const AboutUs = () => {
    return (
        <>
        <GlobalStyles />
        <NavBar/>
        <Header />   
        <About/>                     
        </>
    )
}

export default AboutUs;
