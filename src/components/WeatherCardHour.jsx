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

const CityName = styled.h2`
  text-align: center;
  font-size: 2em;
  margin-bottom: 20px;
  color: ${blueColor};
  ${systemFont}
`;

const CityPageContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  background-color: ${backgroundColor};
  padding: 20px;
  ${glassEffect}
  ${systemFont}
`;

const HourTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  border: none;
  padding: 8px;
  text-align: left;
  color: ${blueColor};
  ${systemFont}
`;

const TableRow = styled.tr`
  &:hover {
    background-color: #3f8fff3e;
  }

  & + & {
    border-top: 1px solid #3f8fff34;
  }

  height: 3rem;
`;

const TableCell = styled.td`
  border: none;
  padding: 8px;
  color: ${textColor};
  ${systemFont}
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

const CityPage = () => {
  const { forecastWData } = useContext(SomeContext);

  if (!forecastWData) {
    return <p></p>;
  }

  const nextFiveDays = forecastWData.forecast.forecastday.slice(0, 5);

  return (
    <CityPageContainer>
      <CityName>{forecastWData.location.name}</CityName>
      {nextFiveDays.map((day, index) => (
        <div key={index}>
          <HourTable>
            <thead>
              <tr>
                <TableHeader>Tid</TableHeader>
                <TableHeader>Ikon</TableHeader>
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
                  <TableCell>
                    <Icon src={hour.condition.icon} alt={hour.condition.text} />
                  </TableCell>
                  <TableCell>{hour.temp_c}°C</TableCell>
                  <TableCell>{hour.feelslike_c}°C</TableCell>
                  <TableCell>{hour.precip_mm} mm</TableCell>
                  <TableCell>
                    {hour.wind_kph} m/s <br />({hour.wind_dir})
                  </TableCell>
                  <TableCell>{hour.chance_of_rain}%</TableCell>
                  <TableCell>{hour.cloud}%</TableCell>
                  <TableCell>{hour.humidity}%</TableCell>
                  <TableCell>{hour.pressure_mb} mb</TableCell>
                </TableRow>
              ))}
            </tbody>
          </HourTable>
        </div>
      ))}
    </CityPageContainer>
  );
};

export default CityPage;
