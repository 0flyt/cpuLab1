import '../global.css';
import styled from 'styled-components';
import CityPage from './pages/CityPage';
import Home from './pages/Home';
// import WeatherContext from './context/WeatherContext';
import { useState } from 'react';
import SomeContext from './context/SomeContext';
// import SomeComponent from './components/SomeComponent';

import {
  createHashRouter,
  Link,
  Outlet,
  RouterProvider,
} from 'react-router-dom';

const NavContainer = styled.header`
  background-color: #f8f9fa;
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;
`;

const Nav = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    gap: 1rem;
  }

  li {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #007bff;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Button = styled.button`
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    gap: 1rem;
  }

  li {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #007bff;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function App() {
  const [someValue, setSomeValue] = useState(null);
  const [currentWData, setCurrentWData] = useState(null);
  const [forecastWData, setForecastWData] = useState(null);
  const router = createHashRouter([
    {
      children: [
        { element: <Home />, path: '/' },
        { element: <CityPage />, path: '/CityPage/:cityName?' },
      ],
      element: (
        <>
          <NavContainer>
            <Nav>
              <ul>
                <li>
                  <Link to="/">5-dagars överblick</Link>
                </li>
                <li>
                  <Link to="/CityPage">Timme för timme</Link>
                </li>
                <li>
                  <Button
                    to="/CityPage/Göteborg"
                    onClick={() => setSomeValue('Göteborg')}
                  >
                    Göteborg
                  </Button>
                </li>
                <li>
                  <Button
                    to="/CityPage/Stockholm"
                    onClick={() => setSomeValue('Stockholm')}
                  >
                    Stockholm
                  </Button>
                </li>
                <li>
                  <Button
                    to="/CityPage/Malmö"
                    onClick={() => setSomeValue('Malmö')}
                  >
                    Malmö
                  </Button>
                </li>
              </ul>
            </Nav>
          </NavContainer>
          <main>
            <Outlet />
          </main>
        </>
      ),
    },
  ]);

  return (
    <>
      <SomeContext.Provider
        value={{
          someValue,
          setSomeValue,
          currentWData,
          setCurrentWData,
          forecastWData,
          setForecastWData,
        }}
      >
        <RouterProvider router={router} />
      </SomeContext.Provider>
    </>
  );
}

export default App;
