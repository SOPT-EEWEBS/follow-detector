import { atom } from 'recoil';
import { FollowInfo } from '../types/follow';

export const sortFollowerList = atom<FollowInfo[]>({
  key: 'sortFollwer',
  default: [],
});

export const sortFollowingList = atom<FollowInfo[]>({
  key: 'sortFollowing',
  default: [],
});
