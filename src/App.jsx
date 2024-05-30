import '../global.css';
import styled from 'styled-components';
import CityPage from './pages/CityPage';
import Home from './pages/Home';

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

function App() {
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
                  <Link to="/">Hem</Link>
                </li>
                <li>
                  <Link to="/CityPage">Om oss</Link>
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
      <RouterProvider router={router} />
    </>
  );
}

export default App;
