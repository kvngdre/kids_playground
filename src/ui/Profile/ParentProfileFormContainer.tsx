import { useEffect, useState } from 'react';
import styles from './UserProfileBox.module.scss';
import Passcode from '../Passcode/Passcode';
import { BsEye } from 'react-icons/bs';
import { BsEyeSlash } from 'react-icons/bs';
import mailIcon from '../../assets/images/email.svg';
import lockIcon from '../../assets/images/padlock.svg';
import useAppStore from '../../store/AppStore';
import classNames from 'classnames';

interface Props {
  flex?: boolean;
}

const ParentProfileFormContainer = ({ flex }: Props) => {
  const passcodeValue = useAppStore((state) => state.passcodeValue);

  const [showPassword, setShowPassword] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showShortCutPasscode, setShowShortCutPasscode] = useState(false);

  const [showPasscode, setShowPasscode] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleEmailVisibility = () => {
    setShowEmail(!showEmail);
  };

  const toggleShortCutVisibility = () => {
    setShowShortCutPasscode(!showShortCutPasscode);
  };

  useEffect(() => {
    if (passcodeValue.join('') === '1234') {
      setShowPasscode(false);
    } else {
      setShowPasscode(true);
    }
  }, [passcodeValue]);

  return (
    <>
      <div
        className={classNames(styles.profile__main__containerInner, {
          [styles.parent]: flex,
        })}
      >
        <div className={styles.profile__main__box}>
          <p className={styles.profile__main__box__name}>
            Change Email Address
          </p>
          <input
            className={classNames(styles.profile__main__box__inputEmail, {
              [styles.parent]: flex,
            })}
            type={showEmail ? 'email' : 'password'}
          />
          <img
            src={mailIcon}
            className={styles.profile__main__box__icon}
            alt="mail icon"
          />
          {showEmail ? (
            <BsEyeSlash
              onClick={toggleEmailVisibility}
              className={styles.profile__main__box__iconEye}
            />
          ) : (
            <BsEye
              onClick={toggleEmailVisibility}
              className={styles.profile__main__box__iconEye}
            />
          )}
        </div>
        <div className={styles.profile__main__box}>
          <p className={styles.profile__main__box__name}>Change Password</p>
          <input
            className={classNames(styles.profile__main__box__inputPassword, {
              [styles.parent]: flex,
            })}
            type={showPassword ? 'text' : 'password'}
          />

          <img
            src={lockIcon}
            className={styles.profile__main__box__icon}
            alt="lock icon"
          />
          {showPassword ? (
            <BsEyeSlash
              onClick={togglePasswordVisibility}
              className={styles.profile__main__box__iconEye}
            />
          ) : (
            <BsEye
              onClick={togglePasswordVisibility}
              className={styles.profile__main__box__iconEye}
            />
          )}
        </div>
        <div className={styles.profile__main__box}>
          <p className={styles.profile__main__box__name}>
            Change Shortcut Passcode
          </p>
          <input
            className={classNames(styles.profile__main__box__inputPassword, {
              [styles.parent]: flex,
            })}
            type={showShortCutPasscode ? 'text' : 'password'}
          />

          <img
            src={lockIcon}
            className={styles.profile__main__box__icon}
            alt="lock icon"
          />
          {showShortCutPasscode ? (
            <BsEyeSlash
              onClick={toggleShortCutVisibility}
              className={styles.profile__main__box__iconEye}
            />
          ) : (
            <BsEye
              onClick={toggleShortCutVisibility}
              className={styles.profile__main__box__iconEye}
            />
          )}
        </div>
      </div>

      <div className={styles.profile__main__buttonContainer}>
        <button
          className={styles.profile__main__buttonContainer__cancelButton}
          data-custom="Cancel"
        ></button>
        <button className={styles.profile__main__buttonContainer__saveButton}>
          Save Changes
        </button>
      </div>
      {showPasscode && <Passcode />}
    </>
  );
};

export default ParentProfileFormContainer;
