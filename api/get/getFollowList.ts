import { FollowInfo } from '../../types/follow';
import client from '../axios';

export const getFollowers = async () => {
  try {
    const response = await client.get<FollowInfo>('/user/followers?per_page=100');
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const getFollowing = async () => {
  try {
    const response = await client.get<FollowInfo>('/user/following?per_page=100');
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
