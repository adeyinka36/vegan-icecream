import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMapPin, faClock, faPhone, faComment} from "@fortawesome/free-solid-svg-icons";

const Con = styled.div`
    display: flex;
    flex-direction: column;
  .top{
    width: 100%;
    height: 50vh;
    background-color: darkcyan;
    @media screen and (min-width: 500px) {
      grid-column: 5/8;
      grid-row: 4/7;
      z-index: 10;
      height: 35vw;
    }
  }
  .bottom{
    padding-left: 4rem;
    padding-right: 2rem;
    background-color: black;
    display: flex;
    flex-direction: column;
    width: 100%;
    color: white;
    font-size: 2rem;
    h1{
      color: blueviolet;
      margin-bottom: 2rem;
      width: 100%;
      display: flex;
      justify-content: flex-start;
    }
    .details{
      display: flex;
      div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 1rem;
        min-width: 3rem;
        .icon{
          justify-self: center;
        }
      }
      *{
        @media screen and (min-width: 500px) {
          font-size: 1.2rem;
        }
      }
    }
    .message,.phone{
      display: flex;
      @media screen and (min-width: 500px) {
        font-size: 1.2rem;
      }
    }
    .icon{
      align-self: flex-start;
      margin-right: 1rem;
    }
    .phone{
      margin-bottom: 1rem;
    }
    form{
      display: flex;
      flex-direction: column;
      input, textarea {
        border: none;
        background-color: black;
        color: white;
        font-size: 1.5rem;
        border-bottom: 1px solid white;
        margin-top: 2.2rem;
            @media screen and (min-width: 500px) {
              width: 60%;
              background-color: darkslategray;
            }
      }
      button{
        width: 25vw;
        margin: 3rem auto;
        padding: 2rem;
        font-size: 2rem;
        border: none;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        @media screen and (min-width: 500px) {
          width: 30%;
          padding: 1rem;
          margin: 1rem 0;
        }
      }
    }
    .icon-div{
      display: flex !important;
      justify-content: center !important;
      flex-direction: row !important;
    }
    @media screen and (min-width: 500px) {
      grid-column: 2/6;
      grid-row: 2/6;
      background-color: darkslategray;
      min-width: 500px;
    }
  }
  @media screen and (min-width: 500px) {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 20vh);
  }
 `
const Form =()=>{


    return(
        <Con>
            <div className="top">

            </div>
            <div className="bottom">
                <h1>CONTACT</h1>
                <div className="location details">
                    <div className="icon-div">
                        <FontAwesomeIcon icon={faMapPin} className="icon"/>
                    </div>
                    <div>
                        <p>79 Westdown Road</p>
                        <p>Leyton, E15 2DA</p>
                        <p>Located close to ASDA Supermarket</p>
                    </div>
                </div>
                <div className="openings details">
                    <div className="icon-div">
                        <FontAwesomeIcon icon={faClock} className="icon" />
                    </div>
                    <div>
                        <p><span>Sun-Thurs:</span>12pm-10pm</p>
                        <p><span>Fri-Sat:</span>12pm-11pm</p>
                    </div>
                </div>
                <div className="phone">
                    <FontAwesomeIcon icon={faPhone} className="icon"/>
                    <p>07534889688</p>
                </div>
                <div className="message">
                    <FontAwesomeIcon icon={faComment} className="icon"/>
                    <p>MESSAGE US</p>
                </div>
                <form>
                    <input placeholder="Name"/>
                    <input placeholder="Phone Number"/>
                    <input placeholder="Email Address"/>
                    <textarea placeholder="Message"/>
                    <button>SEND</button>
                </form>
            </div>
        </Con>
    )
}

export default Form;