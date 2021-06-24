import React from 'react'
import GlobalStyles from './GlobalStyles'
import {SmallBtn} from './Buttons'
import {useEffect, useState} from 'react'
import FacebookLogin from 'react-facebook-login';
import styled from 'styled-components'
import { setColor, setRem, setLetterSpacing, setFont, setBorder, setTransition
} from '../../styles';
import '../../App.css';


export const NavBar = () => {

    const [token, setToken] = useState("")
    const [data, setData] = useState([])
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [picture, setPicture] = useState("")

    const responseFacebook = (response) => {
        setToken(response.accessToken)
        setName(response.name)
        setEmail(response.email)
        setPicture(response.picture)
        console.log("name1" + name);
        console.log("name2" + response.name);
        console.log(response)
      }

    useEffect(() => {
        console.log("component did mount")
        if (localStorage.getItem("token")) {
          setName(localStorage.getItem("name"))
          setEmail(localStorage.getItem("email"))
          setPicture(localStorage.getItem("picture"))
          setToken(localStorage.getItem("token"))
        }
      }, [])

      const logout = () => {
        localStorage.clear()
    }

    return (
        <>
    <GlobalStyles />            
    <SmallBtn as="a" href="/">Home</SmallBtn>
    <SmallBtn as="a" href="/about">about us</SmallBtn>
    {token != "" ? <SmallBtn as="a" href="/">Logout</SmallBtn> :
    <>
    {/* <SmallBtn as="a" href="/login">Login</SmallBtn> */}
    <FacebookLogin
              appId="239056987553093"
              autoLoad={false}
              fields="name,email,picture"
              callback={responseFacebook}
              cssClass="my-facebook-button-class" />
              </>
    }             
        </>
    )
}


export const FaceBookBtn = styled(FacebookLogin)`
.my-facebook-button-class{
    color: red;
}
`