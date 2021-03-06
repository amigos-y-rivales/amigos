import {device} from '../mediaQueries'
import 'reset-css'
import styled from 'styled-components'
import hero from '../../Assets/Gathering.jpg'


export const DBody = styled.body`
font-family: "Sansita";
@media ${device.mobileS}{
  display: none;
}
@media ${device.tablet}{
  display:flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}`

export const Hero = styled.div`
@media ${device.tablet}{
  background-image: url(${hero});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
}
`
export const Logo = styled.img`
margin-bottom: -70px;
height: 355px;
`
export const DBar = styled.div`
@media ${device.tablet}{
  background: #0F1721;
  width: 100%;
  height: 300px;
}`

export const TitleDiv = styled.div`
@media ${device.tablet}{
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
`



export const Phrase = styled.h1`
font-size: 38px;
color: #fff;
text-transform: uppercase;
`

export const JoinDiv = styled.div`
width: 100%;
height: 300px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`


export const JoinBtn = styled.button`

width: 180px;
height: 64px;
background-color: transparent;
letter-spacing: 0.2em;
font-size: 13px;
font-weight: 400;
text-transform: uppercase;
border: 2px solid #fff;
color: white;
:hover {
background: #fff;
  cursor: pointer;
  color:black;

`

export const Arrow = styled.img`
max-width: 100%;
height: auto;
margin-top: 80px;
`

export const Footer = styled.div`
background: blue;
width: 100%;
height: 200px;
`

export const DBarTitle = styled.div`
width: 100%;
height: 150px;
display: flex;
justify-content: center;
align-items: center;
text-transform: uppercase;
font-size: 32px;
font-weight: bold;
color: #fff;
`
export const DBar2 = styled.div`
width: 100%;
height: 150px;
display: flex;
justify-content: space-around;
align-items: center;

`

export const DBar3 = styled.div`
width: 25%;
height: 150px;
display: flex;
align-items: flex-start;
flex-direction: column;
justify-content: center;
`

export const Img = styled.div`
margin-left: 130px;
svg {
  color: white;
  width: 50px;
  height: 50px;
  :hover {
    color: red;
  }
}

}
`
export const H2 = styled.h2`
text-transform: uppercase;
font-size: 28px;
color: #fff;
font-weight: 600;
margin-bottom: 15px;
`

export const P = styled.p`
color: white;
`
export const DesktopA = styled.a`
margin-top: 40px;
height: 64px;
text-decoration: none;
z-index: 20
`