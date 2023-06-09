import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { profileState } from '../../recoil/profile';
import Image from 'next/image';

const Profile = () => {
  const userProfile = useRecoilValue(profileState);
  const { login, avatar_url, followers, following } = userProfile;

  return (
    <StWrapper>
      <img src={avatar_url} alt="avatar_url" width={160} height={160} />
      <StUserName>{login}</StUserName>
      <StUserInfoBlock>
        <StUserDetailInfoBlock>
          <StUserDetailTitle>followers</StUserDetailTitle>
          <StUserDetailDesc>{followers}</StUserDetailDesc>
        </StUserDetailInfoBlock>
        <StUserDetailInfoBlock>
          <StUserDetailTitle>following</StUserDetailTitle>
          <StUserDetailDesc>{following}</StUserDetailDesc>
        </StUserDetailInfoBlock>
      </StUserInfoBlock>
    </StWrapper>
  );
};

export default Profile;

const StWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1rem;

  border: 0.2rem solid ${({ theme }) => theme.colors.lightGreen};
  border-radius: 0.7rem;
`;

const StUserName = styled.p`
  margin: 1rem 0;
`;
const StUserInfoBlock = styled.div`
  display: flex;
  justify-content: center;
`;
const StUserDetailInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & + & {
    margin-left: 1rem;
  }
`;
const StUserDetailTitle = styled.span``;
const StUserDetailDesc = styled.span``;
