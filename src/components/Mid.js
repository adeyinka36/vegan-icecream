import styled from 'styled-components';

const Con = styled.div`
  display: flex;
   .top{
     width: 55%;
     display: grid;
     grid-template-columns: repeat(10, 10%);
     grid-template-rows: repeat(10, 10%);
   }
    .top div{
       height: 30vh;
       width: 20vh;
       background-color: cornflowerblue;
       grid-row: 4/10;
       grid-column: 5/8;
    }
      img{
        height: 40vw;
      }
    .top-img{
      grid-column: 6/10;
      grid-row: 5/10;
    }
    .bottom-img{
      grid-column: 3/7;
      grid-row: 6/8;
      max-height: 30vw;
    }
   .desc{
     color: white;
     align-self: flex-end;
     text-align: center;
     border-bottom: 7px blue solid;
     border-top: 7px blue solid;
     padding-top: 1rem;
     padding-bottom: 1rem;
     transform: rotate(-20deg);
     h3{
       font-size: 2.2rem;
     }
     p{
       font-size: 1.5rem;
     }
   }
`

const Mid = props =>{

    return(
        <Con>
            <div className="top">
                <div></div>
                <img src='/images/mid-1.jpg' className="top-img"/>
                <img src='/images/cream-2.jpg' className="bottom-img"/>
            </div>
            <div className="desc">
                <h3>PERFECT CREAM</h3>
                <h3>CREAM</h3>
                <p>is simply dummy text of the printing and typesetting industry</p>
                <br/>
                <p>is simply dummy text of the printing and typesetting industry. </p>
            </div>
        </Con>
    )
}

export default Mid;