import React, {useState}  from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Burgerbutton from './Burgerbutton';

function Navbar() {
  const[clicked, setClicked]= useState(true)

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
  <NavbarStyles>
    <div className={`links ${clicked ? 'active' : 'noactive'}`}>
        <NavLink className='link'>Item1</NavLink>
        <NavLink className='link'>Item2</NavLink>
        <NavLink className='link'>Item3</NavLink>
        <NavLink className='link'>Item4</NavLink>
    </div>
    <div className="burgerbutton" onClick={handleClick}>
    <Burgerbutton clicked={!clicked}></Burgerbutton>
    </div>
  </NavbarStyles>
  );
}

export default Navbar;

const NavbarStyles = styled.nav`
.links{
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #000000;
  box-shadow: 10px 10px 50px black;
  position: absolute;
  left: -100%;
  transition: 1s;
  gap: 2rem;
}
.links.noactive{
  transition: 1s;
  left: 0;
}
.link{
  font-size: 4rem;
  color: white;
  font-family: sans-serif;
  text-decoration: none;
}

.burgerbutton{
  position: absolute;
  top: 1rem;
  left:2rem;
}

@media (min-width:750px){
.burgerbutton{
 display: none;
}

.links{
  position: static;
  width:100%;
  height: 6rem;
  background-color: #000000;
  flex-direction: row;  
}
.link{
  font-size: 2rem;
  color: white;
  font-family: sans-serif;
  text-decoration: none;
}
}
`;