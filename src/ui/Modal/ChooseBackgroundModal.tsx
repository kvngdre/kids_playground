import { IoIosSearch } from 'react-icons/io';
import s from './ChooseBackgroundModal.module.scss';
import Image1 from '../../assets/images/RectangleBgTwo.png'; // Import images from your codebase
import Image2 from '../../assets/images/RectangleBgOne.png';
import Image3 from '../../assets/images/RectangleBgTwo.png';
import Image4 from '../../assets/images/RectangleBgThree.png';
import Image5 from '../../assets/images/RectangleBgTwo.png';
import Image6 from '../../assets/images/RectangleBgTwo.png';
import Image7 from '../../assets/images/RectangleBgTwo.png';
import Image8 from '../../assets/images/RectangleBgTwo.png';
import Image9 from '../../assets/images/RectangleBgTwo.png';
import Image10 from '../../assets/images/RectangleBgTwo.png';
import Image11 from '../../assets/images/RectangleBgTwo.png';
import Image12 from '../../assets/images/RectangleBgTwo.png';
import Image13 from '../../assets/images/RectangleBgTwo.png';
import Image14 from '../../assets/images/RectangleBgTwo.png';
import Image15 from '../../assets/images/RectangleBgTwo.png';
import Image16 from '../../assets/images/RectangleBgTwo.png';
import Image17 from '../../assets/images/RectangleBgTwo.png';
import Image18 from '../../assets/images/RectangleBgTwo.png';
import Image19 from '../../assets/images/RectangleBgTwo.png';
import Image20 from '../../assets/images/RectangleBgTwo.png';
import Image21 from '../../assets/images/RectangleBgTwo.png';
import Image22 from '../../assets/images/RectangleBgTwo.png';
import Image23 from '../../assets/images/RectangleBgTwo.png';
import Image24 from '../../assets/images/RectangleBgTwo.png';
import { LuPlus } from 'react-icons/lu';
import { LuMinus } from 'react-icons/lu';
import move from '../../assets/images/move.svg';

const ChooseBackgroundModal = () => {
  const images = [
    Image1,

    Image2,
    Image4,
    Image3,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
    Image13,
    Image14,
    Image15,
    Image16,
    Image17,
    Image18,
    Image19,
    Image20,
    Image21,
    Image22,
    Image23,
    Image24,
  ];

  return (
    <div className={s.modal}>
      <div className={s.modal__main}>
        <p className={s.modal__main__heading}>Choose Background</p>
        <div className={s.modal__main__inputContainer}>
          <input className={s.modal__main__input} placeholder="Search" />
          <IoIosSearch className={s.modal__main__inputIcon} />
        </div>

        <div className={s.modal__main__grid}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} />
          ))}
        </div>
      </div>
      <div className={s.modal__preview}>
        <div className={s.modal__preview__container}>
          <p className={s.modal__preview__text}>Preview</p>
          <div className={s.modal__preview__wrapper}>
            <div className={s.modal__preview__wrapper__round}>
              <img className={s.modal__preview__wrapper__iconMove} src={move} />
            </div>
            <div className={s.modal__preview__wrapper__roundLong}>
              <LuMinus className={s.modal__preview__wrapper__iconMinus} />
              <p className={s.modal__preview__wrapper__zoomLevel}>1%</p>
              <LuPlus className={s.modal__preview__wrapper__iconPlus} />
            </div>
          </div>
        </div>
        <div className={s.modal__preview__background}>
          <button className={s.modal__preview__background__button}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseBackgroundModal;
