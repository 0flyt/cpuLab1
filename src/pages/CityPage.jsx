import { useParams } from 'react-router-dom';
import WeatherCard from '../components/WeatherCard';

function CityPage() {
  const { cityName } = useParams();
  return (
    <div>
      <h1>{cityName ? `Väder för ${cityName}` : 'Ingen stad vald'}</h1>
      <WeatherCard />
    </div>
  );
}

export default CityPage;
