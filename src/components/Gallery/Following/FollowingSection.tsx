import { useEffect, useState } from 'react';
import s from './FollowingSection.module.scss';
import FollowingSample from './myFollowersSample.json';
import classNames from 'classnames';
import Search from '../../Search/Search';
import FollowingUser from './FollowingUser';
function FollowersSection() {
  const following = FollowingSample.filter((f) => f.following === true);
  type followingViews = 'following' | 'followers';
  const [selectedView, setSelectedView] = useState<followingViews>('following');
  const [search, setSearch] = useState('');
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const [renderData, setRenderData] = useState(
    FollowingSample.filter((f) => f.following === true),
  );
  const filterByFollowing = () => {
    if (selectedView === 'following')
      return setRenderData(FollowingSample.filter((f) => f.following === true));
    return setRenderData(FollowingSample);
  };
  useEffect(() => {
    filterByFollowing();
  }, [selectedView]);
  return (
    <div className={s.following_container}>
      <div className={s.following_count_card}>
        <div className={s.following_count_text_wrapper}>
          <div
            className={s.following_count_text}
            onClick={() => setSelectedView('following')}
          >
            <p className="h4 text-center">{following.length}</p>
            <p className="h4 text-center" style={{ fontWeight: 400 }}>
              Following
            </p>
          </div>
          <div
            className={s.following_count_text}
            onClick={() => setSelectedView('followers')}
          >
            <p className="h4 text-center">{FollowingSample.length}</p>
            <p className="h4 text-center" style={{ fontWeight: 400 }}>
              Followers
            </p>
          </div>
        </div>
        <div className={s.following_indicator_wrapper}>
          <span className={s.following_indicator_grey}>
            <span
              className={classNames(
                s.following_indicator_blue,
                { [s.start]: selectedView === 'following' },
                { [s.end]: selectedView === 'followers' },
              )}
            ></span>
          </span>
        </div>
      </div>
      <div className={s.following_users_card}>
        <Search value={search} onChange={handleSearch} />
        {renderData.map((user) => (
          <FollowingUser key={user.userName} follower={user} />
        ))}
      </div>
    </div>
  );
}

export default FollowersSection;
