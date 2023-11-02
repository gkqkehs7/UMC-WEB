import React , { useState } from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../slice/userSlice';

const HeaderContainer = styled.div`
  background-color: #0F0861; /*남색으로 지정*/
  color: #fff;
  height: 10%;
  display: flex;
  align-items: center;
  padding: 15px 200px;
`;

const NavigateButton = styled.div`
cursor: pointer;
margin: 0px 10px;
font-weight: 600;
`;

const Img_Button = styled.img`
cursor: pointer;
`;

const Login_Button = styled.button`
cursor: pointer;
background-color: white;
border: none;
border-radius: 10px;
width: 70px;
height: 20px;
margin: 0px 15px; 
`;

const Header = () => {

    const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
    const dispatch = useDispatch();
   
    const navigate = useNavigate();
    
    const toMain = ()=> {
        navigate('/')
    }
    const toMovie = ()=> {
        navigate('/movie')
    }
    const toPeople = ()=> {
        navigate('/celebrity')
    }
    const toProgram = ()=> {
        navigate('/tv')
    }

  
    const handleLoginClick = () => {
      navigate('/signin')
    }
    const handleLogoutClick = () => {
      dispatch(logout())
    }
   

  return (
    <HeaderContainer>
      <Img_Button style={{ width: "154px", height: "20px" }}
      src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
      alt="로고"onClick={toMain} />
      <NavigateButton onClick={toMovie}>영화</NavigateButton>
      <NavigateButton onClick={toProgram}>TV 프로그램</NavigateButton>
      <NavigateButton onClick={toPeople}>인물</NavigateButton>
      {isLoggedIn ? (
        <Login_Button onClick={handleLogoutClick}>로그아웃</Login_Button>
      ) : (
        <Login_Button onClick={handleLoginClick}>로그인</Login_Button>
      )}
      {isLoggedIn ? (
        <p>환영합니다!</p>
      ) : (
        <p>로그인 해주세요!</p>
      )}
    </HeaderContainer>
  );
}

export default Header;