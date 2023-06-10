import React from 'react';
import styled from 'styled-components';

const Profile = () => {
  return (
    <StWrapper>
      <StUserProfileImg />
      <StUserName>woogisea</StUserName>
      <StUserInfoBlock>
        <StUserDetailInfoBlock>
          <StUserDetailTitle>follower</StUserDetailTitle>
          <StUserDetailDesc>10</StUserDetailDesc>
        </StUserDetailInfoBlock>
        <StUserDetailInfoBlock>
          <StUserDetailTitle>following</StUserDetailTitle>
          <StUserDetailDesc>10</StUserDetailDesc>
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

const StUserProfileImg = styled.div`
  width: 10rem;
  height: 10rem;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.pink};
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
