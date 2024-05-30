import { useParams } from 'react-router-dom';

function CityPage() {
  const { cityName } = useParams();

  return <div>Hej {cityName}!</div>;
}

export default CityPage;
