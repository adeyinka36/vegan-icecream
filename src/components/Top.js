import styled from 'styled-components';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faStar, faMapPin, faClock } from "@fortawesome/free-solid-svg-icons";


const Con = styled.div`
        display: grid;
        grid-template-columns: repeat(10,10vw);
        grid-template-rows: repeat(10, 10vh);
        height: 100vh;
        width: 100vw;
        img{
          max-height: 60vh;
        }
        .first,.second {
                display: flex;
                align-items: center;
                justify-content: space-around;
                font-size: 4.5rem;
                color: #BA55D3;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }
        .with,.star{
                color: orange;
        }
       .text {
         font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
         font-size: 3.5rem;
         grid-column: 5/9;
         grid-row: 3/7;
         display: flex;
         justify-content: center;
         flex-direction: column;
         color: #BA55D3;
         z-index: 10;
         transform: rotate(35deg);
         border-bottom: 3px solid #BA55D3;
         border-top: 3px solid #BA55D3;
         p{
           display: flex;
           justify-content: space-around;
         }
       }
  
      .image-1{
        grid-column: 2/7;
        grid-row: 2/9;
        max-height: 90vh;
      }
      .image-2{
        grid-column: 8/10;
        grid-row: 6/9;
      }
`

const Top = () => {

    return(
        <Con>

                <img src="/images/cream-3.jpg" className="image-1"/>
                <div className="text">
                    <p>SERVING TASTY ICECREAM</p>
                    <p><FontAwesomeIcon icon={faStar}/>SINCE 1984 <FontAwesomeIcon icon={faStar}/></p>
                </div>
                <img src="/images/cream-2.jpg" className="image-2"/>

            {/*<div className="text">*/}
            {/*        <div className="first">*/}
            {/*                <span className="star"><FontAwesomeIcon icon={faStar}/></span>*/}
            {/*                <h2>GOOD TIMES</h2>*/}
            {/*                <span className="with">with</span>*/}
            {/*        </div>*/}
            {/*        <div className="second">GREAT FRIENDS</div>*/}
            {/*</div>*/}
        </Con>
    )
}

export default Top;