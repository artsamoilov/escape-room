import * as S from './page-title.styled';
import { ReactNode } from 'react';

type PropsType = {
  children: ReactNode,
}

const PageTitle = ({ children, ...props }: PropsType): JSX.Element => (
  <S.PageTitle {...props}>{children}</S.PageTitle>
);

export default PageTitle;
