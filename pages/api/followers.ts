import { NextApiRequest, NextApiResponse } from 'next';
import { FollowInfo } from '../../types/follow';

const handleGetFollowers = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await fetch('https://api.github.com/user/followers?per_page=100', {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch followers');
    }

    const data = await response.json();
    const followerIds = data.map(({ login }: FollowInfo) => login);

    res.status(200).json({ followerIds });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default handleGetFollowers;
