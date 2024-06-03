import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import SomeContext from '../context/SomeContext';
import SomeComponent from '../components/SomeComponent';
import WeatherCardHour from '../components/WeatherCardHour';
import FetchComponent from '../components/FetchComponent';

const Quote = styled.p`
  font-style: italic;
  color: #333;
  text-align: center;
`;

function CityPage() {
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
      <WeatherCardHour />
      <Quote>Weather forecast for tonight: dark</Quote>
    </>
  );
}

export default CityPage;
