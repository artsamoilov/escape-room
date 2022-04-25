import * as S from './page-heading.styled';
import { ReactNode } from 'react';

type PropsType = {
  children: ReactNode,
}

const PageHeading = ({ children, ...props }: PropsType): JSX.Element => (
  <S.PageHeading {...props}>{children}</S.PageHeading>
);

export default PageHeading;
