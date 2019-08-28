import React from 'react'
import { Link } from "react-router-dom";


const Nav = () => {
  const back = () => {
    window.history.back();
  }
  return (
    <>
    <Link to='/'>Home</Link>
    <span onClick={() => back()}>뒤로가기</span>
    </>
  )
}

export default Nav
