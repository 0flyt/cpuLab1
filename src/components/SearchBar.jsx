import styled from 'styled-components';
import { useState } from 'react';
// import WeatherContext from '../context/WeatherContext';

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

function SearchBar() {
  const [inputValue, setInputValue] = useState('');
  // const { setSearchInput } = useContext(WeatherContext);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(inputValue);
    // setSearchInput(inputValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Ange stad"
        onChange={(event) => setInputValue(event.target.value)}
      />
      <Button type="submit">Ange stad</Button>
    </form>
  );
}

export default SearchBar;
