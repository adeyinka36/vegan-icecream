import styled from 'styled-components';
import {useState , useRef } from "react";

const Con = styled.div`
  z-index: 10;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  svg{
    height: 35rem;
    width: 100%;
    align-self: center;
    justify-self: center;
    color: #BA55D3;
    animation: icecreamscale 2750ms ease-out forwards;
    @media (max-width: 675px) {
      height: 15rem;
    }
    
  }
  .curtain{
    height: 100vh;
    width: 50vw;
    background-color: black;
    position: fixed;
    animation: curtain 1s cubic-bezier(.09,.27,.34,.67) forwards 2800ms;
  }
  .curtain1{
    top: 0;
    left: 0;
    @media (max-width: 675px) {
      display: none;
    }
  }
  .curtain2 {
    top: 0;
    left: 50vw;
    animation: curtain 2s cubic-bezier(.09,.27,.34,.67) forwards 2700ms;
    @media (max-width: 675px){
      width: 100vw;
    }
   
  }
  @keyframes icecreamscale{
    0% {
      transform: scale(1);
    }
    20% {
      transform: scale(1.5);
    }
    35% {
      transform: scale(1.3);
    }
    65% {
      transform: scale(1.5);
    }
    90% {
      transform: scale(.5);
    }
    100% {
      transform: translateY(-250%);
      display: none;
    }
  }
  @keyframes curtain {
    100%{
      top: -200%;
      display: none;
    }
  }


`

const Entrance = ()=>{
    const mainRef = useRef()
setTimeout(()=>{
    mainRef.current.style.display = "none";
},5000)
    return (
        <Con ref={mainRef}>
             <div className="curtain curtain1 entrance"></div>
             <div className="curtain curtain2 entrance"></div>
             <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ice-cream"
                 className="entrance" role="img" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 448 512">
                 <path fill="currentColor" d="M368 160h-.94a144 144 0 1 0-286.12 0H80a48 48 0 0 0 0 96h288a48 48 0 0 0 0-96zM195.38 493.69a31.52 31.52 0 0 0 57.24 0L352 288H96z"></path>
            </svg>

        </Con>
    )
}

export default Entrance;