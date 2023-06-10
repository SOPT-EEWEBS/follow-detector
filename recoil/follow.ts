import { atom } from 'recoil';
import { FollowInfo } from '../types/follow';

export const followState = atom<FollowInfo>({
  key: 'follow',
  default: {
    id: 0,
    login: '',
  },
});
