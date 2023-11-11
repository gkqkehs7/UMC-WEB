import React, { useState } from 'react';
import axios from 'axios';
import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh; /* 화면 전체 높이를 차지하도록 설정합니다. */
flex-direction: column;
`;

const BoxWrapper = styled.div`
border: 2px solid #000; /* 테두리 스타일과 색상을 지정합니다. */
padding: 10px; /* 내부 여백을 지정합니다. */
width: 100px;
height: 150px;
border-radius: 10px;
`;

function App() {

  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const fetchData = async () => {
    try {
      const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

      console.log(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
      setWeatherData(response.data);
    } catch (error) {
      // 여기서 처리
      console.error('헐 에러다', error);
    }
  };


  return (
    <Wrapper>
      <h2>날씨 정보 조회</h2>
      <input
        type="text"
        value={city}
        onChange={handleInputChange}
        placeholder="도시를 입력하세요"
        style={{ marginBottom: '10px', borderRadius: '5px' }}
      />
      <button onClick={fetchData} style={{ marginBottom: '10px' }}>조회</button>

      {weatherData && (
        <BoxWrapper>
          <h3>{weatherData.name}</h3>
          <p>{Math.round(((weatherData.main.temp-273.15)*10))/10}℃</p>
          <p>{weatherData.weather[0].description}</p>
        </BoxWrapper>
      )}
    </Wrapper>
  );

}



export default App;

