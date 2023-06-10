// 헤더를 제외한 깃허브 맞팔 컴포넌트를 감싸는 메인 레이아웃
import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return <StWrapper>{children}</StWrapper>;
};

export default MainLayout;

const StWrapper = styled.main`
  width: 100%;
  margin-top: 10rem;

  display: flex;
  justify-content: center;
`;
