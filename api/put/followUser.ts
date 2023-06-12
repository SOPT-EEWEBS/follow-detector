import client from '../axios';

export interface PutProps {
  login: string;
}

export const followUser = async (props: PutProps) => {
  const { login } = props;
  try {
    const response = await client.put(`/user/following/${login}`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
