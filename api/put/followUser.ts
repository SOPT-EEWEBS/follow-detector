import client from '../axios';

interface PutProps {
  userId: string;
}

export const followUser = async (props: PutProps) => {
  const { userId } = props;
  try {
    const response = await client.put(`/user/following/${userId}`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
