// 홈 컴포넌트 /home
import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import MainLayout from '../../Layout/MainLayout';
import Profile from '../../components/profile/Profile';
import Follower from '../../components/follower/Follower';
import { useRecoilState } from 'recoil';
import { profileState } from '../../recoil/profile';
import { getProfile } from '../../api/get/getProfile';
import { FollowInfo } from '../../types/follow';
import { sortFollowerList } from '../../recoil/follow';
import { getFollowers, getFollowing, getFollowerList } from '../../api/get/getFollowList';
import { followerListState } from '../../recoil/followerList';

const Home = () => {
  const [followerList, setFollowerList] = useState<string[]>([]);
  const [followingList, setFollowingList] = useState<string[]>([]);
  const [sortFollowers, setSortFollowers] = useRecoilState<FollowInfo[]>(sortFollowerList);
  const [userProfile, setUserProfile] = useRecoilState(profileState);
  const [followerList, setFollowerList] = useRecoilState(followerListState);

  // 팔로워 리스트 가져오는 함수
  const handleGetFollowerList = async () => {
    const response = await getFollowerList();
    if (response) setFollowerList(response);
  };

  const handleGetProfile = async () => {
    const response = await getProfile();
    if (response) setUserProfile(response);
  };

  const handleGetFollowers = async () => {
    const response = await fetch('https://api.github.com/user/followers?per_page=100', {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    });
    const data = await response.json();
    if (data) {
      const followerIds = data.map(({ login }: FollowInfo) => login);
      setFollowerList((prevList) => [...prevList, ...followerIds]);
    }
  };

  const handleGetFollowing = async () => {
    const response = await fetch('https://api.github.com/user/following?per_page=100', {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    });
    const data = await response.json();
    if (data) {
      const followingIds = data.map(({ login }: FollowInfo) => login);
      setFollowingList((prevList) => [...prevList, ...followingIds]);
    }
  };

  const sortFollower = () => {
    const sortFollowers = followingList
      .filter((login) => !followerList.includes(login))
      .map((login) => ({ login } as FollowInfo));
    setSortFollowers(sortFollowers);
  };

  useEffect(() => {
    handleGetFollowerList();
    handleGetProfile();
    handleGetFollowers();
    handleGetFollowing();
  }, []);

  useEffect(() => {
    sortFollower();
  }, [followerList, followingList]);

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
