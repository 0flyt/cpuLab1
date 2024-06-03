import { useContext } from 'react';
import styled from 'styled-components';
import SomeContext from '../context/SomeContext';

const backgroundColor = '#E0F7FF';
const textColor = '#333';
const glassEffect = `
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
const blueColor = '#3f8fffce';
const systemFont = `
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
`;

const WeatherCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  width: fit-content;
  margin: 20px auto;
  background-color: ${backgroundColor};
  ${glassEffect}
  ${systemFont}
`;

const CityName = styled.h2`
  text-align: center;
  font-size: 2em;
  margin-bottom: 20px;
  color: ${blueColor};
`;

const WeatherCardsWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

const WeatherCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  ${glassEffect}
  ${systemFont}
`;

const WeatherIcon = styled.img`
  width: 48px;
  height: 48px;
`;

const Day = styled.h3`
  margin: 0;
`;

const DateText = styled.p`
  font-size: 0.9em;
  color: ${textColor};
  margin: 4px 0 0;
`;

const Temperature = styled.p`
  font-size: 1.8em;
  margin: 8px 0;
  font-weight: bold;
`;

const MinTemperature = styled.span`
  font-size: 0.8em;
  color: #888;
`;

const Precipitation = styled.p`
  font-size: 1em;
  color: #007bff;
  margin: 8px 0;
`;

const WindInfo = styled.p`
  font-size: 1em;
  color: #555;
  margin: 8px 0;
`;

const AstroInfo = styled.div`
  margin-top: 10px;
  font-size: 0.8em;
  color: #555;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    margin: 0;
    padding-left: 4px;
  }
`;

const convertKphToMps = (kph) => (kph / 3.6).toFixed(1);

const convertTo24HourFormat = (time) => {
  const [timePart, modifier] = time.split(' ');
  let [hours, minutes] = timePart.split(':').map(Number);

  if (modifier === 'PM' && hours !== 12) {
    hours += 12;
  } else if (modifier === 'AM' && hours === 12) {
    hours = 0;
  }

  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}`;
};

function WeatherCard() {
  const { forecastWData } = useContext(SomeContext);

  if (!forecastWData) {
    return <p></p>;
  }

  const renderForecast = () => {
    const forecastDays = forecastWData.forecast.forecastday.slice(0, 5);

    return forecastDays.map((day, index) => {
      const date = new Date(day.date);
      const formattedDay = date.toLocaleDateString('sv-SE', {
        weekday: 'long',
      });
      const formattedDate = date.toLocaleDateString('sv-SE', {
        day: 'numeric',
        month: 'long',
      });

      return (
        <WeatherCardContent key={index}>
          <Day>{formattedDay}</Day>
          <DateText>{formattedDate}</DateText>
          <Temperature>{day.day.maxtemp_c}°</Temperature>
          <MinTemperature>{day.day.mintemp_c}° min</MinTemperature>
          <WeatherIcon
            src={day.day.condition.icon}
            alt={day.day.condition.text}
          />
          <Precipitation>{day.day.totalprecip_mm} mm</Precipitation>
          <WindInfo>{convertKphToMps(day.day.maxwind_kph)} m/s</WindInfo>
          <AstroInfo>
            <div>
              🌅
              <p>
                {convertTo24HourFormat(day.astro.sunrise)}
                <br />
                {convertTo24HourFormat(day.astro.sunset)}
              </p>
            </div>
          </AstroInfo>
        </WeatherCardContent>
      );
    });
  };

  return (
    <WeatherCardContainer>
      <CityName>{forecastWData.location.name}</CityName>
      <WeatherCardsWrapper>{renderForecast()}</WeatherCardsWrapper>
    </WeatherCardContainer>
  );
}

export default WeatherCard;
