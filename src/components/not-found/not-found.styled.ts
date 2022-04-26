import styled from 'styled-components';
import { Container } from 'components/common/common';
import contactsBg from 'assets/img/contacts-bg.jpg';

const Main = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;

  background-image: url(${contactsBg});
  background-repeat: no-repeat;
  background-position: top left;
  background-color: ${({ theme }) => theme.color.nero};
  background-size: cover;
`;

const ContentWrapper = styled.div`
  max-width: 1080px;
  flex-shrink: 0;
  width: 100%;
  margin: 136px auto 40px auto;
`;

const Link = styled.a`
  margin-top: auto;
  padding: 10px 0;
  font-size: ${({ theme }) => theme.font.semibase};
  line-height: 16px;
  letter-spacing: 0.03em;
  font-weight: 600;
  color: ${({ theme }) => theme.color.whiteSmoke};

  font-feature-settings: 'pnum' on, 'lnum' on;

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.color.tangerine};
  }
`;

export { Main, ContentWrapper, Link };
