import { artworkType } from '../../types/sampleTypes';
import s from './EditArtWorkModal.module.scss';
import editIcon from '../../assets/images/pencil (2) 1.svg';
import { useState } from 'react';
import Dropdown from '../../components/Dropdown/Dropdown';

interface Props {
  artwork: artworkType;
}

const printIcon = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_709_2626)">
      <path
        d="M11.5583 13.9268H6.54524C6.2258 13.9268 5.9668 14.1857 5.9668 14.5052C5.9668 14.8247 6.22577 15.0836 6.54524 15.0836H11.5583C11.8777 15.0836 12.1368 14.8247 12.1368 14.5052C12.1368 14.1857 11.8778 13.9268 11.5583 13.9268Z"
        className={s.svg_fill_1}
      />
      <path
        d="M11.5583 12.1016H6.54524C6.2258 12.1016 5.9668 12.3605 5.9668 12.68C5.9668 12.9995 6.22577 13.2584 6.54524 13.2584H11.5583C11.8777 13.2584 12.1368 12.9995 12.1368 12.68C12.1368 12.3605 11.8778 12.1016 11.5583 12.1016Z"
        className={s.svg_fill_1}
      />
      <path
        d="M16.3783 4.91348H14.5378V1.56575C14.5378 1.24631 14.2789 0.987305 13.9594 0.987305H4.14357C3.82414 0.987305 3.56513 1.24628 3.56513 1.56575V4.91348H1.72467C0.980456 4.91348 0.375 5.51897 0.375 6.26318V12.0826C0.375 12.8268 0.980456 13.4323 1.72467 13.4323H3.56523V16.5373C3.56523 16.8567 3.82421 17.1157 4.14368 17.1157H13.9593C14.2787 17.1157 14.5377 16.8568 14.5377 16.5373V13.4323H16.3783C17.1225 13.4323 17.728 12.8268 17.728 12.0826V6.26318C17.728 5.519 17.1225 4.91348 16.3783 4.91348ZM4.72198 2.14419H13.3809V4.91348H4.72198V2.14419ZM13.3808 15.9588H4.72212C4.72212 15.8458 4.72212 11.3663 4.72212 11.2265H13.3809C13.3808 11.3698 13.3808 15.8501 13.3808 15.9588ZM13.9594 8.31002H12.487C12.1676 8.31002 11.9085 8.05104 11.9085 7.73157C11.9085 7.4121 12.1675 7.15313 12.487 7.15313H13.9594C14.2788 7.15313 14.5378 7.4121 14.5378 7.73157C14.5378 8.05104 14.2789 8.31002 13.9594 8.31002Z"
        className={s.svg_fill_1}
      />
    </g>
    <defs>
      <clipPath id="clip0_709_2626">
        <rect
          width="17.353"
          height="17.353"
          className={s.svg_fill_2}
          transform="translate(0.375 0.375)"
        />
      </clipPath>
    </defs>
  </svg>
);

const downloadIcon = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_709_2638)">
      <path
        d="M16.2297 9.77441C16.038 9.77441 15.8541 9.85059 15.7185 9.98619C15.5829 10.1218 15.5067 10.3057 15.5067 10.4975V13.5436C15.5061 14.0779 15.2936 14.5901 14.9158 14.9679C14.5381 15.3457 14.0258 15.5582 13.4916 15.5587H4.50709C3.97283 15.5582 3.46061 15.3457 3.08283 14.9679C2.70504 14.5901 2.49255 14.0779 2.49198 13.5436V10.4975C2.49198 10.3057 2.4158 10.1218 2.2802 9.98619C2.14461 9.85059 1.9607 9.77441 1.76894 9.77441C1.57718 9.77441 1.39327 9.85059 1.25767 9.98619C1.12208 10.1218 1.0459 10.3057 1.0459 10.4975V13.5436C1.04686 14.4613 1.41182 15.3411 2.06072 15.99C2.70961 16.6389 3.58942 17.0039 4.50709 17.0048H13.4916C14.4093 17.0039 15.2891 16.6389 15.938 15.99C16.5869 15.3411 16.9518 14.4613 16.9528 13.5436V10.4975C16.9528 10.3057 16.8766 10.1218 16.741 9.98619C16.6054 9.85059 16.4215 9.77441 16.2297 9.77441Z"
        className={s.svg_fill_1}
      />
      <path
        d="M5.17261 7.81733L8.27662 10.9213V1.82116C8.27662 1.6294 8.3528 1.44549 8.48839 1.3099C8.62399 1.1743 8.8079 1.09812 8.99966 1.09812C9.19142 1.09812 9.37533 1.1743 9.51093 1.3099C9.64652 1.44549 9.7227 1.6294 9.7227 1.82116V10.9213L12.8267 7.81733C12.9631 7.68563 13.1457 7.61275 13.3353 7.6144C13.5249 7.61604 13.7062 7.69208 13.8403 7.82614C13.9743 7.9602 14.0504 8.14155 14.052 8.33113C14.0537 8.5207 13.9808 8.70335 13.8491 8.83971L9.51085 13.178C9.37526 13.3135 9.19138 13.3896 8.99966 13.3896C8.80794 13.3896 8.62406 13.3135 8.48847 13.178L4.15023 8.83971C4.01852 8.70335 3.94565 8.5207 3.94729 8.33113C3.94894 8.14155 4.02498 7.9602 4.15904 7.82614C4.2931 7.69208 4.47444 7.61604 4.66402 7.6144C4.8536 7.61275 5.03624 7.68563 5.17261 7.81733Z"
        className={s.svg_fill_1}
      />
    </g>
    <defs>
      <clipPath id="clip0_709_2638">
        <rect
          width="17.353"
          height="17.353"
          className={s.svg_fill_2}
          transform="translate(0.323242 0.375)"
        />
      </clipPath>
    </defs>
  </svg>
);

const shareIcon = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.46365 4.49224C4.36932 4.75753 0.272461 8.98592 0.272461 14.1448V17.7399L1.55872 14.7455C3.07998 11.7035 6.09825 9.75846 9.46365 9.57962V13.6942L17.6254 7.0225L9.46365 0.375V4.49224Z"
      className={s.svg_fill_1}
    />
  </svg>
);

const sampleAudience = ['Public', 'Followers', 'Only Me'];

function EditArtWorkModal({ artwork }: Props) {
  const [artTitle, setArtTitle] = useState(artwork.title);
  const [artDescription, setArtDescription] = useState(artwork.description);
  const [artAudience, setArtAudience] = useState(artwork.audience);
  const handlePrint = () => {
    console.log('print');
  };
  const handleDownload = () => {
    console.log('download');
  };
  const handleShare = () => {
    console.log('share');
  };
  const bottomButtons = [
    {
      name: 'print',
      icon: printIcon,
      onClick: () => handlePrint(),
    },
    {
      name: 'download',
      icon: downloadIcon,
      onClick: () => handleDownload(),
    },
    {
      name: 'share',
      icon: shareIcon,
      onClick: () => handleShare(),
    },
  ];

  return (
    <div className={s.modal}>
      <div className={s.art_image_wrapper}>
        <div
          className={s.art_image_bg}
          style={{
            background: `url(${artwork?.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className={s.art_image_edit_wrapper}>
            <img
              src={editIcon}
              alt="settings"
              className={s.art_image_edit_icon}
            />
          </div>
          <div className={s.art_image_bottom_buttons_wrapper}>
            {bottomButtons.map((b) => (
              <button
                key={b.name}
                onClick={b.onClick}
                className={s.art_image_bottom_button}
              >
                {b.icon}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className={s.art_info_wrapper}>
        <p className={s.art_info_date}>Created on December 3, 2023</p>
        <div className={s.art_info_details}>
          <div className={s.art_info_detail_wrapper}>
            <p className={s.art_info_detail_title_text}>Title</p>
            <input
              type="text"
              className={s.art_info_detail_title_input}
              value={artTitle}
              onChange={(e) => setArtTitle(e.target.value)}
            />
          </div>
          <div className={s.art_info_detail_wrapper}>
            <div className={s.art_info_detail_title_wrapper}>
              <p className={s.art_info_detail_title_text}>Description</p>
              <p
                className={s.art_info_detail_character_count}
              >{`${artDescription.length}/400 characters`}</p>
            </div>
            <textarea
              rows={5}
              className={s.art_info_detail_title_input}
              value={artDescription}
              onChange={(e) => setArtDescription(e.target.value)}
            />
          </div>
          <div className={s.art_info_detail_wrapper}>
            <p className={s.art_info_detail_title_text}>Audience</p>
            <Dropdown
              options={sampleAudience}
              selectedOption={artAudience}
              setSelectedOption={(option: string) => setArtAudience(option)}
            />
          </div>
        </div>
        <div className={s.art_info_options_wrapper}>
          <p className={s.art_info_options_delete}>Delete</p>
          <button className={s.art_info_options_save}>Save Changes</button>
        </div>
      </div>
    </div>
  );
}

export default EditArtWorkModal;
