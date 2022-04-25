import { ReactNode } from 'react';
import * as S from './button.styled';

type PropsType = {
  children: ReactNode,
};

const Button = ({ children, ...props } : PropsType): JSX.Element => (
  <S.Button {...props}>{children}</S.Button>
);

export default Button;
