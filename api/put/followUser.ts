import client from '../axios';

export const followUser = async (props: string) => {
  try {
    const response = await client.put(`/user/following/${props}`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
