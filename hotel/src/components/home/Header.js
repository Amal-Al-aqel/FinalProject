import React from 'react'
import Hero from '../globals/Hero'
import aboutImg from '../../images/aboutBcg.jpeg'
import homeImg from '../../images/homeBcg.jpeg'
import Banner from '../globals/Banner'
import { PrimaryBtn } from '../globals/Buttons'

export const Header = () => {
    return (
        <Hero >
            <Banner greeting="welcome to" title="dreams resort" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur nihil sapiente rem perspiciatis voluptatem deleniti?" > 
            <PrimaryBtn t="1rem">View Details</PrimaryBtn>
            {/* <PrimaryBtn as="a" href="https://www.google.com" t="1rem">View Details</PrimaryBtn> */}
            </Banner>                     
        </Hero>
    )
}
