// 홈 컴포넌트 /home
import React, { useEffect } from 'react';
import Header from '../../components/header/Header';
import MainLayout from '../../Layout/MainLayout';
import Profile from '../../components/profile/Profile';
import Follower from '../../components/follower/Follower';
import { useRecoilState } from 'recoil';
import { profileState } from '../../recoil/profile';
import { getProfile } from '../../api/get/getProfile';
import { getFollowers, getFollowing } from '../../api/get/getFollowList';

const Home = () => {
  const [userProfile, setUserProfile] = useRecoilState(profileState);

  const handleGetProfile = async () => {
    const response = await getProfile();
    if (response) setUserProfile(response);
  };

  const handleGetFollowers = async () => {
    const response = await getFollowers();
    console.log(response);
  };
  const handleGetFollowing = async () => {
    const response = await getFollowing();
    console.log(response);
  };

  useEffect(() => {
    handleGetProfile();
    handleGetFollowers();
    handleGetFollowing();
  }, []);

  return (
    <div>
      <Header />
      <MainLayout>
        <Profile />
        <Follower />
      </MainLayout>
    </div>
  );
};

export default Home;
