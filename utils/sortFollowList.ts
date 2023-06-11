import { FollowInfo } from '../types/follow';

const sortFollowList = (sortList: string[], sortedList: string[]): FollowInfo[] => {
  const sortedToList = sortList
    .filter((login) => !sortedList.includes(login))
    .map((login) => ({ login } as FollowInfo));
  return sortedToList;
};

export default sortFollowList;
