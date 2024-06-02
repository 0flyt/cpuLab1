import '../global.css';
import styled from 'styled-components';
import Hours from './pages/Hours';
import Home from './pages/Home';
import { useState } from 'react';
import SomeContext from './context/SomeContext';

import {
  createHashRouter,
  Link,
  Outlet,
  RouterProvider,
} from 'react-router-dom';

const NavContainer = styled.header`
  background-color: #f8f9fa;
  padding: 1rem;
  border-bottom: 1px solid #3f8fff1f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
`;

const Nav = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  li {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #3f8fffce;
    font-weight: bold;
    padding: 8px 16px;
    border-radius: 4px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #3f8fffce;
      color: #fff;
    }
  }
`;

const Button = styled.button`
  text-decoration: none;
  color: #3f8fffce;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: transparent;
  border: 2px solid #3f8fff49;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3f8fffce;
    color: #fff;
  }
`;

const Main = styled.main`
  background-color: #e0f7ff;
  min-height: 100vh;
  padding: 2rem;
`;

function App() {
  const [someValue, setSomeValue] = useState(null);
  const [currentWData, setCurrentWData] = useState(null);
  const [forecastWData, setForecastWData] = useState(null);
  const router = createHashRouter([
    {
      children: [
        { element: <Home />, path: '/:cityName?' },
        { element: <Hours />, path: '/Hours/:cityName?' },
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
                  <Link to="/Hours/">Timme för timme</Link>
                </li>
                <li>
                  <Button
                    to="/Hours/Göteborg"
                    onClick={() => setSomeValue('Göteborg')}
                  >
                    Göteborg
                  </Button>
                </li>
                <li>
                  <Button
                    to="/Hours/Stockholm"
                    onClick={() => setSomeValue('Stockholm')}
                  >
                    Stockholm
                  </Button>
                </li>
                <li>
                  <Button
                    to="/Hours/Malmö"
                    onClick={() => setSomeValue('Malmö')}
                  >
                    Malmö
                  </Button>
                </li>
              </ul>
            </Nav>
          </NavContainer>
          <Main>
            <Outlet />
          </Main>
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
