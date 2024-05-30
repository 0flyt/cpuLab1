import styled from 'styled-components';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Input = styled.input`
  border-radius: 2px;
  border: 1px solid blue;
  padding: 5px;
  margin-right: 5px;
`;

const Button = styled.button`
  background-color: blue;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;

function SearchBar({ setSearchWeather }) {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <Input
        type="text"
        placeholder="Sök"
        onChange={(event) => setInputValue(event.target.value)}
        value={inputValue}
      />
      <Button onClick={() => setSearchWeather(inputValue)}>Sök</Button>
    </>
  );
}

SearchBar.propTypes = {
  setSearchWeather: PropTypes.func,
};

export default SearchBar;
