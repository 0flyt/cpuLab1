import styled from 'styled-components';
import SomeComponent from '../components/SomeComponent';
import WeatherCardHour from '../components/WeatherCardHour';
import FetchComponent from '../components/FetchComponent';

const Quote = styled.p`
  font-style: italic;
  color: #333;
`;

function CityPage() {
  return (
    <>
      <Quote>Weather forecast for tonight: dark</Quote>
      <SomeComponent />
      <FetchComponent />
      <WeatherCardHour />
    </>
  );
}

export default CityPage;
