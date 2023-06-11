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
import sortFollowList from '../../utils/sortFollowList';

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

  const fetchFollowers = async () => {
    try {
      const response = await fetch('/api/followers');
      if (response.ok) {
        const data = await response.json();
        const followerIds = data.followerIds;
        setFollowerList((prevList) => [...prevList, ...followerIds]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const fetchFollowings = async () => {
    try {
      const response = await fetch('/api/followings');
      if (response.ok) {
        const data = await response.json();
        const followingIds = data.followingIds;
        setFollowingList((prevList) => [...prevList, ...followingIds]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const sortFollower = () => {
    const sortFollowers = sortFollowList(followingList, followerList);
    setSortFollowers(sortFollowers);
  };

  const sortFollowing = () => {
    const sortFollowings = sortFollowList(followerList, followingList);
    setSortFollowings(sortFollowings);
  };

  useEffect(() => {
    handleGetProfile();
    fetchFollowers();
    fetchFollowings();
  }, []);

  useEffect(() => {
    sortFollower();
    sortFollowing();
  }, [followerList, followingList]);

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
