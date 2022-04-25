import * as S from './container.styled';
import { ReactNode } from 'react';

type PropsType = {
  children: ReactNode,
}

const Container = ({ children, ...props }: PropsType): JSX.Element => (
  <S.Container {...props}>{children}</S.Container>
);

export default Container;
