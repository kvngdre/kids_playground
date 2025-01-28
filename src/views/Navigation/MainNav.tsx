import galleryIcon from '../../assets/images/profileGallery.svg';
import createIcon from '../../assets/images/profileCreate.svg';
import communityIcon from '../../assets/images/profileSmiley.svg';
import avatarIcon from '../../assets/images/profileavatar.svg';
import rewardIcon from '../../assets/images/profileReward.svg';
import NavItemGroup from './NavItemGroup';
import s from './MainNav.module.scss';
import CoinBox from './CoinBox';

const MainNav = () => {
  return (
    <div className={s.nav}>
      <NavItemGroup imageSrc={galleryIcon} text="Gallery" toRoute="gallery" />
      <NavItemGroup imageSrc={createIcon} text="Create" toRoute="create" />
      <NavItemGroup
        imageSrc={communityIcon}
        text="Community"
        toRoute="community"
      />
      <NavItemGroup imageSrc={avatarIcon} text="Profile" toRoute="profile" />
      <NavItemGroup imageSrc={rewardIcon} text="Rewards" toRoute="rewards" />
      <div className={s.nav__buttonWrapper}>
        <CoinBox />
      </div>
    </div>
  );
};

export default MainNav;
