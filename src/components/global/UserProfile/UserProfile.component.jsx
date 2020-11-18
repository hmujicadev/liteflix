import React from 'react';
import {oneOf} from 'prop-types';

import Blue_profile_URL from '../../../assets/images/profile-blue.png';
import Pink_profile_URL from '../../../assets/images/profile-pink.png';
import Gray_profile_URL from '../../../assets/images/profile-gray.png';
import {UserProfileWrapper, UserProfileImg} from './UserProfile.styles';

const UserProfile = ({variant,size,margin}) => {
  const getProfileColorByVariant = () => {
    switch (variant) {
      case 'blue':
        return Blue_profile_URL;
      case 'pink':
        return Pink_profile_URL;
      case 'gray':
        return Gray_profile_URL;
      default:
        return Blue_profile_URL;
    }
  };
  return (
    <UserProfileWrapper>
      <UserProfileImg size={size} margin={margin} src={getProfileColorByVariant()} />
    </UserProfileWrapper>
  );
};

UserProfile.propTypes = {
  variant: oneOf(['blue', 'pink', 'gray']),
};

export default UserProfile;
