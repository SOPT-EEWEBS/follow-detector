import styled from 'styled-components';
import { useState } from 'react';

interface FollowButtonProps {
  isFollowing: boolean;
}
interface FollwerProps {
  follwerList: string[];
}

const Follower = ({ follwerList }: FollwerProps) => {
  const [isFollowing, setIsFollowing] = useState<boolean>(false);

  return (
    <StWrapper>
      <StListTitle>팔로우 리스트</StListTitle>
      <StFollowerListBlock>
        {follwerList.map((name, idx) => {
          return (
            <StFollowerBlock key={idx}>
              <StFollowerName>{name}</StFollowerName>
              <StFollowBtn onClick={() => setIsFollowing(!isFollowing)} isFollowing={isFollowing}>
                {isFollowing ? 'following' : 'follow'}
              </StFollowBtn>
            </StFollowerBlock>
          );
        })}
      </StFollowerListBlock>
    </StWrapper>
  );
};

export default Follower;

const StWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1rem;
  margin: 2rem 0rem;

  border: 0.2rem solid ${({ theme }) => theme.colors.lightGreen};
  border-radius: 0.7rem;
`;

const StListTitle = styled.header`
  margin-bottom: 1rem;
`;

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

const StFollowBtn = styled.button<FollowButtonProps>`
  width: 5rem;
  padding: 0.3rem;
  margin-left: 1rem;
  border: none;
  border-radius: 1rem;

  background-color: ${({ isFollowing, theme }) => (isFollowing ? theme.colors.lightPurple : theme.colors.lightPink)};
  font-size: 1rem;
`;
