import React from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled.div`
  background-color: #0a0a5c;
  color: #fff;
  height: 10%;
  display: flex;
  align-items: center;
  padding: 15px 200px;
`;

const NavigateButton = styled.div`
  cursor: pointer;
  margin: 0px 15px;
  font-weight: 600;
`

const Header = () => {

  const navigate = useNavigate();

  const toMain = () => {
    navigate('/')
  }

  const toMovie = () => {
      navigate('/movie')
  }

  const toProgram = () => {
    navigate('/program')
}

const toPeople = () => {
  navigate('/people')
}


  return (
    <HeaderContainer>
      <NavigateButton onClick={toMain}>
        메인으로 이동
      </NavigateButton>

      <NavigateButton onClick={toMovie}>
        영화로 이동
      </NavigateButton>

      <NavigateButton onClick={toProgram}>
        프로그램으로 이동
      </NavigateButton>

      <NavigateButton onClick={toPeople}>
        인물로 이동
      </NavigateButton>
    </HeaderContainer>
  );
}

export default Header;
