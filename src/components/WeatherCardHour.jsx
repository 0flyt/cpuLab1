import { useContext } from 'react';
import styled from 'styled-components';
import SomeContext from '../context/SomeContext';

// Bakgrundsfärg
const backgroundColor = '#E0E7FF';

// Textfärg
const textColor = '#333';

// Glas-effekt
const glassEffect = `
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

// Blå färg för rubrik och tabellhuvuden
const blueColor = '#3f8fffce';

const CityName = styled.h2`
  text-align: center;
  font-size: 2em;
  margin-bottom: 20px;
  color: ${blueColor};
`;

const CityPageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: ${backgroundColor};
  padding: 20px;
  ${glassEffect}
`;

const HourlyWeatherTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  border: none;
  padding: 8px;
  text-align: left;
  color: ${blueColor};
`;

const TableRow = styled.tr`
  &:hover {
    background-color: #3f8fff3e;
  }

  & + & {
    border-top: 1px solid ${blueColor};
  }
`;

const TableCell = styled.td`
  border: none;
  padding: 8px;
  color: ${textColor};
`;

const CityPage = () => {
  const { forecastWData } = useContext(SomeContext);

  if (!forecastWData) {
    return <p>Ingen väderdata tillgänglig.</p>;
  }

  const nextFiveDays = forecastWData.forecast.forecastday.slice(0, 5);

  return (
    <CityPageContainer>
      <CityName>{forecastWData.location.name}</CityName>
      {nextFiveDays.map((day, index) => (
        <div key={index}>
          <HourlyWeatherTable>
            <thead>
              <tr>
                <TableHeader>{day.date}</TableHeader>
                <TableHeader>Temp</TableHeader>
                <TableHeader>Känns som</TableHeader>
                <TableHeader>Nederbörd (mm)</TableHeader>
                <TableHeader>Vind (m/s)</TableHeader>
                <TableHeader>Sannolikhet för nederbörd (%)</TableHeader>
                <TableHeader>Moln (%)</TableHeader>
                <TableHeader>Luftfuktighet (%)</TableHeader>
                <TableHeader>Lufttryck (mb)</TableHeader>
              </tr>
            </thead>
            <tbody>
              {day.hour.map((hour, hourIndex) => (
                <TableRow key={hourIndex}>
                  <TableCell>{hour.time.substr(11, 5)}</TableCell>
                  <TableCell>{hour.temp_c}°C</TableCell>
                  <TableCell>{hour.feelslike_c}°C</TableCell>
                  <TableCell>{hour.precip_mm} mm</TableCell>
                  <TableCell>
                    {hour.wind_kph} m/s ({hour.wind_dir})
                  </TableCell>
                  <TableCell>{hour.chance_of_rain}%</TableCell>
                  <TableCell>{hour.cloud}%</TableCell>
                  <TableCell>{hour.humidity}%</TableCell>
                  <TableCell>{hour.pressure_mb} mb</TableCell>
                </TableRow>
              ))}
            </tbody>
          </HourlyWeatherTable>
        </div>
      ))}
    </CityPageContainer>
  );
};

export default CityPage;
