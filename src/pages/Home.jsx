import styled from 'styled-components';
import SearchBar from '../components/searchBarComponent';

const Quote = styled.p`
  font-style: italic;
  color: #333;
`;

function Home() {
  return (
    <>
      <Quote>Weather forecast for tonight: dark</Quote>
      <SearchBar />
    </>
  );
}

export default Home;
