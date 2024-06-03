import styled from 'styled-components';
import SomeComponent from '../components/SomeComponent';
import WeatherCard from '../components/WeatherCard';
import FetchComponent from '../components/FetchComponent';
import { useParams } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import SomeContext from '../context/SomeContext';

const Quote = styled.p`
  font-style: italic;
  color: #333;
  text-align: center;
`;

function Home() {
  const { cityName } = useParams();
  const { setSomeValue } = useContext(SomeContext);

  useEffect(() => {
    if (cityName) {
      setSomeValue(cityName);
    }
  }, [cityName, setSomeValue]);

  return (
    <>
      <SomeComponent />
      <FetchComponent />
      <WeatherCard />
      <Quote>Weather forecast for tonight: dark</Quote>
    </>
  );
}

export default Home;
