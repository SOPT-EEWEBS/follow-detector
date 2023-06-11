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
import { sortFollowerList, sortFollowingList } from '../../recoil/follow';

const Home = () => {
  const [followerList, setFollowerList] = useState<string[]>([]);
  const [followingList, setFollowingList] = useState<string[]>([]);
  const [sortFollowers, setSortFollowers] = useRecoilState<FollowInfo[]>(sortFollowerList);
  const [sortFollowings, setSortFollowings] = useRecoilState<FollowInfo[]>(sortFollowingList);
  const [userProfile, setUserProfile] = useRecoilState(profileState);

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

  const sortFollowing = () => {
    const sortFollowings = followerList
      .filter((login) => !followingList.includes(login))
      .map((login) => ({ login } as FollowInfo));
    setSortFollowings(sortFollowings);
  };

  useEffect(() => {
    handleGetProfile();
    handleGetFollowers();
    handleGetFollowing();
  }, []);

  useEffect(() => {
    sortFollower();
    sortFollowing();
  }, [followerList, followingList]);

  console.log(sortFollowings);
  console.log(sortFollowers);

  return (
    <div>
      <Header />
      <MainLayout>
        <Profile />
        <Follower follwerList={followerList} />
      </MainLayout>
    </div>
  );
};

export default Home;
