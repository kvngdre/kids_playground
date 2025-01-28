import s from './UserProfileBox.module.scss';
import profileImage from '../../assets/images/Ellipse.png';
import profilePhotoEdit from '../../assets/images/bigEdit.svg';
import mailIcon from '../../assets/images/email.svg';
import lockIcon from '../../assets/images/padlock.svg';
import backgroundPhotoEdit from '../../assets/images/smallEdit.svg';
import userIcon from '../../assets/images/user.svg';
import ChooseBackgroundModal from '../../ui/Modal/ChooseBackgroundModal';
import Modal from '../../ui/Modal/Modal';
import { BsEye } from 'react-icons/bs';
import { BsEyeSlash } from 'react-icons/bs';
import { useState } from 'react';

interface Props {
  type?: 'user' | 'parent';
}

const UserProfileBox = ({ type = 'user' }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleEmailVisibility = () => {
    setShowEmail(!showEmail);
  };

  return type === 'user' ? (
    <div className={s.profile}>
      <div className={s.profile__background}>
        <img
          className={s.profile__background__image}
          src={profileImage}
          alt="profile image"
        />
        <img
          className={s.profile__background__avatarEdit}
          src={profilePhotoEdit}
          alt="profile photo edit"
        />
        <Modal>
          <Modal.Open opensWindowName="chooseBackground">
            <img
              className={s.profile__background__bgEdit}
              src={backgroundPhotoEdit}
              alt="background photo edit"
            />
          </Modal.Open>

          <Modal.Window name="chooseBackground">
            <ChooseBackgroundModal />
          </Modal.Window>
        </Modal>
      </div>
      <div className={s.profile__main}>
        <div className={s.profile__main__wrapper}>
          <div className={s.profile__main__container}>
            <div className={s.profile__main__containerInner}>
              <div className={s.profile__main__box}>
                <p className={s.profile__main__box__name}>First Name</p>
                <input
                  className={s.profile__main__box__input}
                  defaultValue="Aliyah"
                />
                <img
                  src={userIcon}
                  className={s.profile__main__box__icon}
                  alt="user icon"
                />
              </div>
              <div className={s.profile__main__box}>
                <p className={s.profile__main__box__name}>User Name</p>
                <input
                  className={s.profile__main__box__inputLg}
                  defaultValue="Alicat"
                />
                <img
                  src={userIcon}
                  className={s.profile__main__box__icon}
                  alt="user icon"
                />
              </div>
            </div>

            <div className={s.profile__main__containerInner}>
              <div className={s.profile__main__box}>
                <p className={s.profile__main__box__name}>
                  Change Email Address
                </p>
                <input
                  className={s.profile__main__box__inputEmail}
                  type={showEmail ? 'email' : 'password'}
                />
                <img
                  src={mailIcon}
                  className={s.profile__main__box__icon}
                  alt="mail icon"
                />
                {showEmail ? (
                  <BsEyeSlash
                    onClick={toggleEmailVisibility}
                    className={s.profile__main__box__iconEye}
                  />
                ) : (
                  <BsEye
                    onClick={toggleEmailVisibility}
                    className={s.profile__main__box__iconEye}
                  />
                )}
              </div>
              <div className={s.profile__main__box}>
                <p className={s.profile__main__box__name}>Change Password</p>
                <input
                  className={s.profile__main__box__inputPassword}
                  type={showPassword ? 'text' : 'password'}
                />

                <img
                  src={lockIcon}
                  className={s.profile__main__box__icon}
                  alt="lock icon"
                />
                {showPassword ? (
                  <BsEyeSlash
                    onClick={togglePasswordVisibility}
                    className={s.profile__main__box__iconEye}
                  />
                ) : (
                  <BsEye
                    onClick={togglePasswordVisibility}
                    className={s.profile__main__box__iconEye}
                  />
                )}
              </div>
            </div>
          </div>
          <div className={s.profile__main__buttonContainer}>
            <button
              className={s.profile__main__buttonContainer__cancelButton}
              data-custom="Cancel"
            ></button>
            <button className={s.profile__main__buttonContainer__saveButton}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : type === 'parent' ? (
    <div className={`${s.profile} ${s.parent}`}>
      <div className={s.profile__background}>
        <img
          className={s.profile__background__image}
          src={profileImage}
          alt="profile image"
        />
        <img
          className={s.profile__background__avatarEdit}
          src={profilePhotoEdit}
          alt="profile photo edit"
        />
        <Modal>
          <Modal.Open opensWindowName="chooseBackground">
            <img
              className={s.profile__background__bgEdit}
              src={backgroundPhotoEdit}
              alt="background photo edit"
            />
          </Modal.Open>

          <Modal.Window name="chooseBackground">
            <ChooseBackgroundModal />
          </Modal.Window>
        </Modal>
      </div>
      <div className={`${s.profile__main} ${s.parent}`}>
        <div className={s.profile__main__wrapper}>
          <div className={s.profile__main__container}>
            <div className={s.profile__main__containerInner}>
              <div className={s.profile__main__box}>
                <p className={s.profile__main__box__name}>First Name</p>
                <input
                  className={s.profile__main__box__input}
                  defaultValue="Aliyah"
                />
                <img
                  src={userIcon}
                  className={s.profile__main__box__icon}
                  alt="user icon"
                />
              </div>
              <div className={s.profile__main__box}>
                <p className={s.profile__main__box__name}>User Name</p>
                <input
                  className={s.profile__main__box__inputLg}
                  defaultValue="Alicat"
                />
                <img
                  src={userIcon}
                  className={s.profile__main__box__icon}
                  alt="user icon"
                />
              </div>
            </div>
          </div>
          <div className={s.profile__main__buttonContainer}>
            <button
              className={s.profile__main__buttonContainer__cancelButton}
              data-custom="Cancel"
            ></button>
            <button className={s.profile__main__buttonContainer__saveButton}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default UserProfileBox;
