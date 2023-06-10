// 홈 컴포넌트 /home
import React from 'react';
import Header from '../../components/header/Header';
import MainLayout from '../../Layout/MainLayout';
import Profile from '../../components/profile/Profile';

const Home = () => {
  return (
    <div>
      <Header />
      <MainLayout>
        <Profile />
      </MainLayout>
    </div>
  );
};

export default Home;
