import { useContext, useState, useEffect } from 'react';
import SomeContext from '../context/SomeContext';

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
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ange stad"
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button type="submit">Ange stad</button>
    </form>
  );
}

export default SomeComponent;
