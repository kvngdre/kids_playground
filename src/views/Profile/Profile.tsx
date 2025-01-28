import arrowIcon from '../../assets/images/ArrowUp.svg';
import useAppStore from '../../store/AppStore';
// import Passcode from '../../ui/Passcode/Passcode';
import UserProfileBox from '../../ui/Profile/UserProfileBox';
import s from './Profile.module.scss';
import ParentProfileFormContainer from '../../ui/Profile/ParentProfileFormContainer';

const Profile = () => {
  const profileState = useAppStore((state) => state.profileState);

  return (
    <div className={s.main}>
      {profileState === 'user' && (
        <div className={s.main__container}>
          <div className={s.main__container__wrapper}>
            <p className={s.main__container__heading}>User Profile</p>
            <div className={s.main__container__previewBox}>
              <p className={s.main__container__previewText}>Preview</p>
              <img className={s.main__container__previewIcon} src={arrowIcon} />
            </div>
          </div>
          <UserProfileBox type="user" />
        </div>
      )}
      {profileState === 'parent' && (
        <>
          <div className={s.main__container}>
            <div className={s.main__container__wrapper}>
              <p className={s.main__container__heading}>User Profile</p>
              <div className={s.main__container__previewBox}>
                <p className={s.main__container__previewText}>Preview</p>
                <img
                  className={s.main__container__previewIcon}
                  src={arrowIcon}
                />
              </div>
            </div>
            <UserProfileBox type="parent" />
          </div>
          <div className={s.subContainer}>
            <p className={s.subContainer__heading}>Parental Settings</p>
            <div className={s.subContainer__box}>
              <ParentProfileFormContainer flex={true} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
