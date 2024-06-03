import PropTypes from 'prop-types';
import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import SomeContext from '../context/SomeContext';

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledListItem = styled.li`
  background-color: #3f8fff;
  border: 1px solid #3f8fff57;
  border-radius: 4px;
  padding: 10px 20px;
  margin: 5px 0;
  width: 100%;
  max-width: 200px;
  text-align: center;
  font-size: 1em;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3f8fffce;
  }

  &:active {
    background-color: #3f8fffa3;
  }
`;
function SearchHistory({ cityName }) {
  const { setSomeValue } = useContext(SomeContext);
  const [cityList, setCityList] = useState(() => {
    const savedCityList = localStorage.getItem('cityList');
    return savedCityList ? new Set(JSON.parse(savedCityList)) : new Set();
  });

  useEffect(() => {
    if (cityName) {
      const lowerCaseName = cityName.toLowerCase();
      setCityList((prev) => {
        const newCityList = new Set(prev);
        newCityList.add(lowerCaseName);
        localStorage.setItem('cityList', JSON.stringify([...newCityList]));
        return newCityList;
      });
    }
  }, [cityName]);

  return (
    <StyledList>
      {[...cityList].map((city, index) => (
        <StyledListItem key={index} onClick={() => setSomeValue(city)}>
          {city}
        </StyledListItem>
      ))}
    </StyledList>
  );
}

SearchHistory.propTypes = {
  cityName: PropTypes.string,
};

export default SearchHistory;
