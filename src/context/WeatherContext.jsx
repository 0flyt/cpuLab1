// import { createContext, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

// export const WeatherContext = createContext();

// const ApiKey = '67b6d0652ce74640907135354242705'; //expires 240610

// export const WeatherProvider = ({ children }) => {
//   const [searchInput, setSearchInput] = useState('');
//   const [currentWData, setCurrentWData] = useState(null);
//   const [forecastWData, setForecastWData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchWeatherData = async () => {
//       setIsLoading(true);
//       try {
//         const currentWResponse = await fetch(
//           `http://api.weatherapi.com/v1/current.json?key=${ApiKey}&q=${searchInput}&aqi=yes`
//         );
//         const currentW = await currentWResponse.json();

//         const forecastWResponse = await fetch(
//           `http://api.weatherapi.com/v1/forecast.json?key=${ApiKey}&q=${searchInput}&days=3&aqi=yes&alerts=yes`
//         );
//         const forecastW = await forecastWResponse.json();

//         setCurrentWData(currentW);
//         setForecastWData(forecastW);
//         setError(null);
//       } catch (error) {
//         setError('Misslyckades med att fetcha väder');
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     if (searchInput) {
//       fetchWeatherData();
//     }
//   }, [searchInput]);

//   return (
//     <WeatherContext.Provider
//       value={{
//         searchInput,
//         setSearchInput,
//         currentWData,
//         forecastWData,
//         isLoading,
//         error,
//       }}
//     >
//       {children}
//     </WeatherContext.Provider>
//   );
// };

// WeatherProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default WeatherProvider;
