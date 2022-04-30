import { ThemeProvider } from 'styled-components';
import { Route, BrowserRouter } from 'components/common/common';
import { Routes } from 'react-router-dom';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import { appTheme } from './common';
import * as S from './app.styled';
import { AppRoute } from 'const';
import NotFound from 'components/not-found/not-found';

const App = (): JSX.Element => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Quest}
          element={<DetailedQuest />}
        />
        <Route
          path={AppRoute.Contacts}
          element={<Contacts />}
        />
        <Route
          path={AppRoute.Home}
          element={<Home />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
