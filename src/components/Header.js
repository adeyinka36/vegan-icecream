import styled from  'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIceCream,faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { useState, useRef } from "react";

const Con = styled.div`
  z-index: 200;
  height: 10vh;
  background-color: black;
  align-items: center;
  justify-content: space-between;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: rgba(0,0,0,0);
  li{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  } 
  span{
    position: absolute;
    height: .5rem;
    width: .5rem;
    border-radius: 50%;
    background-color: #BA55D3;
    top: 1.3rem;
    left: 21px;
    transition: left 500ms;
  }
  .menu-icons {
    color: #BA55D3;
    font-size: 2rem;
  }
  .google {
    margin-right: 1.7rem;
  }
  .logo, .burger{
    font-size: 5rem;
  }
  ul{
    display: flex;
    color: white;
  }
  li{
      margin-right: 2.5rem;
      font-weight: 800;
      font-size: 1.75rem;
  }
  .contact{
    li{
      margin-right: 1rem;
    }
    @media (max-width: 599px){
      display: none;
    }
  }
  .nav{
    position: relative;
    @media (max-width: 599px){
      display: none;
    }
    li{
      &:hover{
        color: #BA55D3;
        cursor: pointer;
      }
    }
  }
  .burger {
    display: none;
    @media (max-width: 599px){
      display: inline-block;
      font-size: 4rem;
      margin-right: 1.7rem;
    }
    &:hover {
      color: white;
      cursor: pointer;
    }
  }
 .mobile-nav-con{
   display: none;
   position: fixed;
   width: 100vw;
   height: 100vh;
   top: 0;
   right: -200%;
   background-color: black;
   transition: right 1s ease-in;
   
   @media (max-width: 599px){
     display: flex;
     justify-content: space-around;
     align-items: center;
     font-size: 2.5rem;
   }
   h1{
     font-family: 'Pacifico', cursive;
     color: #BA55D3;
   }
   ul{
     display: flex;
     flex-direction: column;
     li{
       text-align: center;
       margin-bottom: 2rem;
       &:hover{
         color: #BA55D3;
         cursor: pointer;
       }
     }
   }
   .cancel-mobile{
     position: absolute;
     right: 1rem;
     top: 1rem;
     color: white;
     &:hover{
       cursor: pointer;
       color: #BA55D3;
     }
   }
   
 }
 .logo-name{
   display: none;
   @media (max-width: 599px){
     display: inline-block;
     color: #BA55D3;
     font-size: 2rem;
     letter-spacing: .25rem;
     font-family: 'Pacifico', cursive;
   }
   @media (max-width: 375px) {
     font-size: 1.6rem;
   }
 }
  .nav {
    margin-left: 6rem;
    li {
      font-size: 1rem;
    }
  }
`

const Header  =  ()=> {
    const [cursorDotPosition, setCursorDotPosition] = useState('21px');
    const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
    const cursorDot =  useRef();
    const mobileMenuCon = useRef();
    const iconFollow = e => {
        switch (e.target.innerText.toLowerCase()) {
            case 'menu':
                cursorDot.current.style.left = '110px'
                return;
            case 'about':
                cursorDot.current.style.left = '203px'
                return;
            case 'home':
                cursorDot.current.style.left = '21px'
                return;
            case 'brewery':
                cursorDot.current.style.left = '307px'
                return;
            case 'subscribe':
                cursorDot.current.style.left = '433px'
                return;

        }
    }

    const newDotPosition = e => {
        switch (e.target.innerText.toLowerCase()) {
            case 'menu':
                setCursorDotPosition('110px')
                cursorDot.current.style.left = '110px'
                return;
            case 'about':
                setCursorDotPosition('203px')
                cursorDot.current.style.left = '203px'
                return;
            case 'home':
                setCursorDotPosition('21px')
                cursorDot.current.style.left = '21px'
                return;
            case 'brewery':
                setCursorDotPosition('307px')
                cursorDot.current.style.left = '307px'
                return;
            case 'subscribe':
                setCursorDotPosition('433px')
                cursorDot.current.style.left = '433px'
                return;

        }
    }
    const returnDot = () => {
                cursorDot.current.style.left = cursorDotPosition;

    }

    const showMobileMenu = () =>{
        if(!displayMobileMenu) {
            setDisplayMobileMenu(!displayMobileMenu);
            mobileMenuCon.current.style.right = '0';
        } else {
            setDisplayMobileMenu(!displayMobileMenu);
            mobileMenuCon.current.style.right = '-200%';
        }


    }

        return (
            <Con>
                <FontAwesomeIcon icon={faIceCream} className="menu-icons logo"/>
                <ul className="nav">
                    <li className="menu-name" onMouseEnter={iconFollow} onClick={newDotPosition} onMouseOut={returnDot}>HOME</li>
                    <li className="menu-name" onMouseEnter={iconFollow} onClick={newDotPosition} onMouseOut={returnDot}>MENU</li>
                    <li className="menu-name" onMouseEnter={iconFollow} onClick={newDotPosition} onMouseOut={returnDot}>ABOUT</li>
                    <li className="menu-name" onMouseEnter={iconFollow} onClick={newDotPosition} onMouseOut={returnDot}>BREWERY</li>
                    <li className="menu-name" onMouseEnter={iconFollow} onClick={newDotPosition} onMouseOut={returnDot}>SUBSCRIBE</li>
                    <span ref={cursorDot}></span>
                </ul>
                <ul className="contact">
                    <li><FontAwesomeIcon icon={faInstagram} className="menu-icons"/></li>
                    <li><FontAwesomeIcon icon={faFacebook} className="menu-icons"/></li>
                    <li><FontAwesomeIcon icon={faGoogle} className="menu-icons google"/></li>
                </ul>
                <h1 className="logo-name">CREAMY</h1>
                <FontAwesomeIcon icon={faBars} className=" menu-icons burger" onClick={showMobileMenu}/>
                <div className="mobile-nav-con" ref={mobileMenuCon}>
                    <ul className="mobile-nav">
                        <li>HOME</li>
                        <li>MENU</li>
                        <li>ABOUT</li>
                        <li>BREWERY</li>
                        <li>SUBSCRIBE</li>
                    </ul>
                    <FontAwesomeIcon icon={faTimes} className="cancel-mobile" onClick={showMobileMenu}/>
                </div>
            </Con>
        )


}
export default Header;