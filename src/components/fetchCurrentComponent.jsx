async function FetchCurrentWeather(city) {
  const ApiKey = '67b6d0652ce74640907135354242705'; //expires 240610
  const ApiCurrentUrl = 'http://api.weatherapi.com/v1/current.json?key='; //&q=Göteborg&aqi=yes

  try {
    const response = await fetch(`${ApiCurrentUrl}${ApiKey}&q=${city}&aqi=yes`);
    if (!response.ok) {
      throw new Error('Vädret svarar inte');
    }
    const weatherData = await response.json();
    console.log('Fetch', weatherData);
  } catch (error) {
    console.error('Hämta väder misslyckades', error);
  }
}

export default FetchCurrentWeather;
