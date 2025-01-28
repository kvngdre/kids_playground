import classNames from 'classnames';
import { boardsArtworkType } from '../../../types/sampleTypes';
import StarIcon from '../../../assets/images/Star 1.svg';
import EllipsisIcon from '../../../assets/images/ellipsis.svg';
import AddIcon from '../../../assets/images/add-icon-2.svg';
import s from './FindInspirationBoards.module.scss';

const sampleInspiration: boardsArtworkType[] = [
  {
    _id: '1a3b5c7d9e2g4g6',
    ownerUserName: 'alicat',
    ownerImageUrl: '/images/placeholder_image.png',
    artImageUrl: '/images/placeholder_art_board_1.webp',
    isFavourited: true,
    isLiked: false,
  },
  {
    _id: 'h8j2k4l6n9n1o3',
    ownerUserName: 'alicat',
    ownerImageUrl: '/images/placeholder_image.png',
    artImageUrl: '/images/placeholder_art_board_1.webp',
    isFavourited: false,
    isLiked: true,
  },
  {
    _id: 'p0q2r4s6u8u9v1',
    ownerUserName: 'alicat',
    ownerImageUrl: '/images/placeholder_image.png',
    artImageUrl: '/images/placeholder_art_board_1.webp',
    isFavourited: false,
    isLiked: false,
  },
  {
    _id: 'w2x4y6z8b0b1c3',
    ownerUserName: 'alicat',
    ownerImageUrl: '/images/placeholder_image.png',
    artImageUrl: '/images/placeholder_art_board_1.webp',
    isFavourited: false,
    isLiked: true,
  },
];

function FindInspirationBoards() {
  return (
    <div className={s.inspire_wrapper}>
      <p className="h3 color_primary_400">Find inspiration</p>
      <div className={s.inspire_artworks}>
        {sampleInspiration.map((artwork) => (
          <div className={s.artwork_wrapper} key={artwork._id}>
            <img
              src={artwork.artImageUrl}
              alt="artwork"
              className={s.artwork_img}
            />
            <div className={s.artwork_options_wrapper}>
              <div
                className={classNames(s.artwork_option_wrapper, {
                  [s.align_right]: artwork.isFavourited === false,
                })}
              >
                {artwork.isFavourited && <img src={StarIcon} alt="favourite" />}
                <img
                  src={EllipsisIcon}
                  alt="more"
                  className={s.artwork_ellipsis}
                />
              </div>
              <div
                className={classNames(
                  s.artwork_option_wrapper,
                  s.artwork_option_wrapper_bottom,
                )}
              >
                <div className={s.artwork_owner_wrapper}>
                  <img
                    src={artwork.ownerImageUrl}
                    alt={artwork.ownerUserName}
                    className={s.artwork_owner_img}
                  />
                  <p className={s.artwork_owner_username}>
                    {artwork.ownerUserName}
                  </p>
                </div>
                <img
                  src={AddIcon}
                  alt="add"
                  className={s.artwork_add}
                  onClick={() => console.log(artwork)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FindInspirationBoards;
