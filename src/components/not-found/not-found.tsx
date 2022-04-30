import { MainLayout, PageTitle, PageHeading, PageSubtext } from 'components/common/common';
import * as S from './not-found.styled';
import { AppRoute } from 'const';
import { SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = (): JSX.Element => {
  const navigate = useNavigate();

  const handleLinkClick = (evt: SyntheticEvent): void => {
    evt.preventDefault();
    navigate(AppRoute.Home);
  };

  return (
    <MainLayout>
      <S.Main>
        <S.ContentWrapper>
          <PageHeading>
            <PageTitle>Страница не найдена</PageTitle>
            <PageSubtext>Ошибка 404</PageSubtext>
          </PageHeading>
          <S.Link onClick={handleLinkClick} href={AppRoute.Home}>Вернуться к списку квестов</S.Link>
        </S.ContentWrapper>
      </S.Main>
    </MainLayout>
  );
};

export default NotFound;
