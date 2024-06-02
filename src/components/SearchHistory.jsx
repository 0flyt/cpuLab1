import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

function SearchHistory({ cityName }) {
  const [cityList, setCityList] = useState(new Set());

  useEffect(() => {
    if (cityName) {
      const lowerCaseName = cityName.toLowerCase();
      setCityList((prev) => new Set([...prev, lowerCaseName]));
    }
  }, [cityName]);

  return (
    <ul>
      {[...cityList].map((city, index) => (
        <li key={index}>{city}</li>
      ))}
    </ul>
  );
}

SearchHistory.propTypes = {
  cityName: PropTypes.string,
};

export default SearchHistory;
