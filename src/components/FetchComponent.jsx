import { useContext, useEffect, useState } from 'react';
import SomeContext from '../context/SomeContext';

function FetchComponent() {
  const ApiKey = '67b6d0652ce74640907135354242705'; //expires 240610
  const { someValue, setCurrentWData, setForecastWData } =
    useContext(SomeContext);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      setIsLoading(true);
      console.log(someValue, 'someValue');
      try {
        const currentWResponse = await fetch(
          `http://api.weatherapi.com/v1/current.json?key=${ApiKey}&q=${someValue}&aqi=yes`
        );
        const currentW = await currentWResponse.json();
        console.log('loggar', currentW);
        const forecastWResponse = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=${ApiKey}&q=${someValue}&days=5&aqi=yes&alerts=yes`
        );
        const forecastW = await forecastWResponse.json();
        console.log(forecastW);
        setCurrentWData(currentW);
        setForecastWData(forecastW);
        setError(null);
      } catch (error) {
        console.error(error);
        setError(`Misslyckades med att fetcha väder: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    // Kontrollera om someValue finns innan du börjar hämta data
    if (someValue !== null) {
      fetchWeatherData();
    }
  }, [someValue, setCurrentWData, setForecastWData]);

  // Kontrollera om someValue inte finns och rendera null om så är fallet
  if (!someValue) {
    return null;
  }

  if (isLoading) {
    return <div>Laddar...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return null;
}

export default FetchComponent;
