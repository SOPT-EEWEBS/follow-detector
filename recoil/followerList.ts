import { atom } from 'recoil';
import { FollowInfo } from '../types/follow';

export const followerListState = atom<FollowInfo[]>({
  key: 'followerList',
  default: [
    {
      login: '',
    },
  ],
});
