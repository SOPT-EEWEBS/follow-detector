import { ProfileInfo } from '../../types/profile';
import client from '../axios';

export const getProfile = async () => {
  try {
    const response = await client.get<ProfileInfo>('/user');
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
