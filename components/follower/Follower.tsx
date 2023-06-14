import styled, { css } from 'styled-components';
import { useRecoilValue } from 'recoil';
import { sortFollowerList, sortFollowingList } from '../../recoil/follow';
import theme from '../../styles/theme';
import { followUser } from '../../api/put/followUser';

interface FollwerProps {
  follwerList: string[];
}

const Follower = ({ follwerList }: FollwerProps) => {
  const sortFollowers = useRecoilValue(sortFollowerList);
  const sortFollowings = useRecoilValue(sortFollowingList);

  // sortFollowings안에 포함되어 있는지 확인하는 함수
  const inSortFollowings = (login: string) => {
    return sortFollowings.map((it) => it.login).includes(login);
  };

  // 맞팔하는 함수
  const handleFollow = async (userId: string) => {
    try {
      await followUser(userId);
      alert(`${userId} 팔로우 성공!`);
      location.reload();
    } catch (error) {
      alert(`${userId} 팔로우 실패!`);
    }
  };

  return (
    <StWrapper>
      <StListWrapper>
        <StListTitle>나의 팔로워</StListTitle>
        <StFollowerListBlock>
          {follwerList.map((userId, idx) => {
            return (
              <StFollowerBlock key={idx}>
                <StFollowerName>{userId}</StFollowerName>
                <StFollowBtn
                  onClick={() => {
                    inSortFollowings(userId) ? handleFollow(userId) : alert(`${userId}은 이미 팔로우 중입니다!`);
                  }}
                  following={sortFollowings
                    .map((it) => it.login)
                    .includes(userId)
                    .toString()}>
                  {inSortFollowings(userId) ? 'follow' : 'following'}
                </StFollowBtn>
              </StFollowerBlock>
            );
          })}
        </StFollowerListBlock>
      </StListWrapper>

      <StListWrapper>
        <StListTitle>내가 팔로우하지 않는 사람</StListTitle>
        <StFollowerListBlock>
          {sortFollowings.map((followings, idx) => {
            const { login } = followings;
            return (
              <StFollowerBlock key={idx}>
                <StFollowerName>{login}</StFollowerName>
                <StFollowBtn onClick={() => handleFollow(login)} following={'true'}>
                  follow
                </StFollowBtn>
              </StFollowerBlock>
            );
          })}
        </StFollowerListBlock>
      </StListWrapper>

      <StListWrapper>
        <StListTitle>나를 팔로우하지 않는 사람</StListTitle>
        <StFollowerListBlock>
          {sortFollowers.map((followers, idx) => {
            return (
              <StFollowerBlock key={idx}>
                <StFollowerName>{followers.login}</StFollowerName>
                <StFollowBtn onClick={() => alert(`${followers.login}은 이미 팔로우 중입니다!`)}>following</StFollowBtn>
              </StFollowerBlock>
            );
          })}
        </StFollowerListBlock>
      </StListWrapper>
    </StWrapper>
  );
};

export default Follower;

const StWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: start;

  gap: 1rem;
`;

const StListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1rem;
  margin: 2rem 0rem;

  border: 0.2rem solid ${({ theme }) => theme.colors.lightGreen};
  border-radius: 0.7rem;

  gap: 1rem;
`;

const StListTitle = styled.header``;

const StFollowerListBlock = styled.article`
  display: flex;
  flex-direction: column;
`;

const StFollowerBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.5rem;
`;

const StFollowerName = styled.p`
  margin-right: 1rem;
`;

const StFollowBtn = styled.button<{ following?: string }>`
  width: 5rem;
  padding: 0.3rem;
  margin-left: 1rem;
  border: none;
  border-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.lightPurple};

  ${(props) =>
    props.following == 'true' &&
    css`
      background-color: ${theme.colors.darkPink_modal};
      color: white;
    `}
  font-size: 1rem;
`;
