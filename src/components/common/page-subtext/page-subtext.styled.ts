import styled from 'styled-components';

const PageSubtext = styled.p`
  margin: 0 0 9px 0;
  padding: 0;

  font-size: ${({ theme }) => theme.font.semibase};
  line-height: 144%;

  color: ${({ theme }) => theme.color.tangerine};
`;

export { PageSubtext };
