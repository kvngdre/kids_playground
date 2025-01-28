import { useState } from 'react';
import classNames from 'classnames';
import { followersType } from '../../../types/sampleTypes';
import s from './FollowingUser.module.scss';

interface Props {
  follower: followersType;
}

function FollowingUser({ follower }: Props) {
  const [isFollowing, setIsFollowing] = useState<boolean>(follower.following);
  return (
    <div className={s.user_wrapper}>
      <div className={s.user_details_wrapper}>
        <img
          src={follower.imageUrl}
          alt="profile image"
          className={s.user_details_img}
        />
        <p className={s.user_details_username}>{follower.userName}</p>
      </div>
      <button
        className={classNames(
          {
            [s.user_follow]: !isFollowing,
          },
          {
            [s.user_following]: isFollowing,
          },
        )}
        onClick={() => setIsFollowing(!isFollowing)}
      >
        {isFollowing ? 'following' : 'follow'}
      </button>
    </div>
  );
}

export default FollowingUser;
