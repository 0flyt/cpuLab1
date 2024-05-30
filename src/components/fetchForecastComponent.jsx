async function fetchForecastWeather(city, days) {
  const ApiKey = '67b6d0652ce74640907135354242705'; //expires 240610
  const ApiForecastUrl = 'http://api.weatherapi.com/v1/forecast.json?key='; //&q=Göteborg&days=3&aqi=yes&alerts=yes
  try {
    const response = await fetch(
      `${ApiForecastUrl}${ApiKey}&q=${city}&days=${days}aqi=yes&alerts=yes`
    );
    if (!response.ok) {
      throw new Error('Vädret svarar inte');
    }
    const data = await response.json();
    console.log(data);
    return { data };
  } catch (error) {
    console.error('Hämta väder failade', error);
    return { error: error.message };
  }
}

export default fetchForecastWeather;
