import * as S from './page-subtext.styled';
import { ReactNode } from 'react';

type PropsType = {
  children: ReactNode,
}

const PageSubtext = ({ children, ...props }: PropsType): JSX.Element => (
  <S.PageSubtext {...props}>{children}</S.PageSubtext>
);

export default PageSubtext;
