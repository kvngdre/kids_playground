import s from './MyGalleyCard.module.scss';
import settingsIcon from '../../../assets/images/settings_2.svg';
interface Props {
  title: string;
  gallery: any[];
  onSettings: () => void;
}
function MyGalleryCard({ title, gallery, onSettings }: Props) {
  return (
    <div className={s.gallery_card_wrapper}>
      <div className={s.gallery_card_image_wrapper}>
        {gallery &&
          gallery.length > 0 &&
          gallery
            .slice(0, 4)
            .map((image) => (
              <img
                src={image?.imageUrl}
                alt={image?.title}
                key={image?.title}
                className={s.gallery_card_image}
              />
            ))}
      </div>
      <div className={s.gallery_card_title_wrapper}>
        <p className="h4 text-center">{title}</p>
      </div>
      <div className={s.gallery_card_settings_wrapper} onClick={onSettings}>
        <img
          src={settingsIcon}
          alt="settings"
          className={s.gallery_card_settings_icon}
        />
      </div>
    </div>
  );
}

export default MyGalleryCard;
