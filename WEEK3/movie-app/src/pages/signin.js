import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
`;

const FormLabel = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
`;

const SubmitButton = styled.div`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function SigninPage() {

    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");


    const changeEmail = (e) => {
        setEmail(e.target.value);
    }

    const changeNickname = (e) => {
        setNickname(e.target.value);
    }

    const changePassword = (e) => {
        setPassword(e.target.value);
    }

    const login = () =>  {
        console.log(email, nickname)
        dispatch(login({ email: email, nickname: nickname }))
    }

  return (
    <LoginContainer>
      <LoginForm>
        <FormLabel>Email:</FormLabel>
        <FormInput value={email} onChange={changeEmail} type="email" placeholder="이메일을 입력하세요" />

        <FormLabel>닉네임:</FormLabel>
        <FormInput value={nickname} onChange={changeNickname} type="text" placeholder="닉네임을 입력하세요" />

        <FormLabel>패스워드:</FormLabel>
        <FormInput value={password} onChange={changePassword} type="password" placeholder="패스워드를 입력하세요" />

        <SubmitButton onSubmit={login} >로그인</SubmitButton>
      </LoginForm>
    </LoginContainer>
  );
}

export default SigninPage;
