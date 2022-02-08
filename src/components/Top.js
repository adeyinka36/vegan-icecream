import styled from 'styled-components';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faStar, faMapPin, faClock } from "@fortawesome/free-solid-svg-icons";


const Con = styled.div`
        display: grid;
        width: 100%;
        height: 120vh;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(8, 1fr);
        .text{
                grid-column: 5/12;
                grid-row: 2/4;
                max-width: 730px;
        }
        .first,.second {
                display: flex;
                align-items: center;
                justify-content: space-around;
                font-size: 4.5rem;
                color: #BA55D3;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }

        .top1 {
                background-image: url("/images/top-replace.jpg");
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                width: 100%;
                grid-column: 2/9;
                grid-row: 1/6;
                max-width: 700px;
                
                
        }

        .top2 {
                background-image: url("/images/top-2.jpg");
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                width: 100%;
                grid-column: 7/12;
                grid-row: 5/10;
        }
`

const Top = () => {

    return(
        <Con>
            <div className="top1"></div>
            <div className="top2"></div>
            <div className="text">
                    <div className="first">
                            <span><FontAwesomeIcon icon={faStar}/></span>
                            <h2>GOOD TIMES</h2>
                            <span>with</span>
                    </div>
                    <div className="second">GREAT FRIENDS</div>
            </div>
            <div>
                    <span>

                            <p><FontAwesomeIcon icon={faMapPin}/>140 DEWSBURY STREET</p>
                            <p>WAKEFIELD WEST-YORKSHIRE</p>
                            <p>TOWN CENTER</p>
                            <p>0705487755</p>
                    </span>
                    <span>
                            <p><FontAwesomeIcon icon={faClock}/>SUN-THURS:12PM-8PM</p>
                            <p>FRI-SAT:12PM-12AM </p>
                    </span>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </Con>
    )
}

export default Top;