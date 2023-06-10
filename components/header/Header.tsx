import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return <StWrapper>깃허브 맞팔 탐지기</StWrapper>;
};

export default Header;

const StWrapper = styled.header`
  width: 100%;
  padding: 1rem;

  background-color: ${({ theme }) => theme.colors.green};
`;
