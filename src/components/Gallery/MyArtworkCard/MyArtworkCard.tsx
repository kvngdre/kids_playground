import s from './MyArtworkCard.module.scss';
import settingsIcon from '../../../assets/images/settings_2.svg';
import Modal from '../../../ui/Modal/Modal';
import { artworkType } from '../../../types/sampleTypes';
import EditArtWorkModal from '../../../ui/Modal/EditArtWorkModal';

interface Props {
  artwork: artworkType;
}

function MyArtworkCard({ artwork }: Props) {
  return (
    <div className={s.artwork_card_wrapper}>
      <div
        className={s.artwork_card_bg}
        style={{
          background: `url(${artwork?.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Modal>
          <Modal.Open opensWindowName="editArtWork">
            <div className={s.artwork_card_settings_wrapper}>
              <img
                src={settingsIcon}
                alt="settings"
                className={s.artwork_card_settings_icon}
              />
            </div>
          </Modal.Open>
          <Modal.Window name="editArtWork">
            <EditArtWorkModal artwork={artwork} />
          </Modal.Window>
        </Modal>
        <div className={s.artwork_card_content_wrapper}>
          <p className={s.artwork_card_content_title}>{artwork?.title}</p>
          <p className={s.artwork_card_content_description}>
            {artwork?.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MyArtworkCard;
