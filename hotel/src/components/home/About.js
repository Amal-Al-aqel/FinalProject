import React from 'react'
import Section from '../globals/Section'
import Title from '../globals/Title'
import aboutImg from '../../images/aboutBcg.jpeg'
import { setRem, setBorder, setColor, setletterSpacing, media, setLetterSpacing } from '../../styles'
import {PrimaryBtn} from '../globals/Buttons'
import styled from 'styled-components'

export const About = () => {
    return (
        <Section>
            <AboutCenter>
                <div className="about-img">
                <img src={aboutImg} alt="about us" />
                </div>
                <div className="about-info">
                <Title title="About Us"></Title>
                <p>Welcome to our website we are glad to have you here. </p>
                <PrimaryBtn t="1rem">read more</PrimaryBtn>
                </div>            
            </AboutCenter>
        </Section>
    )
}

const AboutCenter = styled.div`
.about-img, 
.about-info{
    padding: ${setRem(30)};
}
.about-img{
    img{
        width:100%;
        display: block;
        ${setBorder({width:setRem(6), color:setColor.primaryColor})}
    }
}
.about-info{
    p{
        ${setLetterSpacing(3)};

    }
}
width:90vw;
margin:0 auto;
${media.desktop`
width:100vw;
max-width:1170px;
display:grid;
grid-template-columns:1fr 1fr;
grid-column-gap:${setRem(32)};
.about-img{
    align-self:center;
}
.about-info{
    p{
        width:80%;
    }
}
`}
`;