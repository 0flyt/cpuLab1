import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import SomeContext from '../context/SomeContext';
import SearchHistory from './SearchHistory';

const Form = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: center;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 1em;
  border: 1px solid #3f8fff57;
  border-radius: 4px;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 1em;
  background-color: #3f8fffce;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #3f8fff;
  }
`;

function SomeComponent() {
  const [inputValue, setInputValue] = useState('');
  const { someValue, setSomeValue } = useContext(SomeContext);

  useEffect(() => {
    console.log('someValue has been updated:', someValue);
  }, [someValue]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(inputValue);
    setSomeValue(inputValue);

    setInputValue('');
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Ange stad"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <Button type="submit">Ange stad</Button>
      </Form>
      <SearchHistory cityName={someValue} />
    </>
  );
}

export default SomeComponent;
