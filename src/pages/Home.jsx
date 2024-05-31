import styled from 'styled-components';
import SomeComponent from '../components/SomeComponent';
import WeatherCard from '../components/WeatherCard';
import FetchComponent from '../components/FetchComponent';

const Quote = styled.p`
  font-style: italic;
  color: #333;
`;

function Home() {
  return (
    <>
      <Quote>Weather forecast for tonight: dark</Quote>
      <SomeComponent />
      <FetchComponent />
      <WeatherCard />
    </>
  );
}

export default Home;
