import { atom } from 'recoil';
import { FollowInfo } from '../types/follow';

export const sortFollowerList = atom<FollowInfo[]>({
  key: 'sort',
  default: [],
});
