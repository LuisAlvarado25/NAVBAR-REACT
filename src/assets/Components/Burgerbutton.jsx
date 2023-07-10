import React from 'react'
import styled from 'styled-components'

function Burgerbutton(props) {
    console.log(props.clicked)
  return (
    <>
    <StyleButton>
    <div className={`container ${props.clicked ? 'open' : ''}`}>
    <div></div>
    <div></div>
    <div></div>
    </div>
    </StyleButton>
    </>
  )
}

export default Burgerbutton

const StyleButton=styled.div`
.container{
 height: 30px;
 background-color: black;
}
.container div {
  width: 35px;
  height: 5px;
  background-color: #ffffff;
  margin: 5px 0;
}
.container.open div:nth-child(1){
   display: none;
}
.container.open div:nth-child(2) {
    position: absolute;
    top:10px;
    transform: rotate(-45deg);
    transition: 1s;
  }

  .container.open div:nth-child(3) {
    position: absolute;
    top:10px;
    transform: rotate(45deg);
    transition: 1s;
  }

 
`;
