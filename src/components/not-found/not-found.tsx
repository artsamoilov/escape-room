import { MainLayout, PageTitle, PageHeading, PageSubtext } from 'components/common/common';
import * as S from './not-found.styled';
import { AppRoute } from '../../const';

const NotFound = (): JSX.Element => (
  <MainLayout>
    <S.Main>
      <S.ContentWrapper>
        <PageHeading>
          <PageTitle>Страница не найдена</PageTitle>
          <PageSubtext>Ошибка 404</PageSubtext>
        </PageHeading>
        <S.Link href={AppRoute.Home}>Вернуться к списку квестов</S.Link>
      </S.ContentWrapper>
    </S.Main>
  </MainLayout>
);

export default NotFound;
