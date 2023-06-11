import { atom } from 'recoil';
import { ProfileInfo } from '../types/profile';

export const profileState = atom<ProfileInfo>({
  key: 'profile',
  default: {
    login: '',
    avatar_url: '',
    followers: 0,
    following: 0,
  },
});
