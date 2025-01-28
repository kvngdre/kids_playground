import { boardsArtworkType } from '../../types/sampleTypes';
import s from './BoardArtCard.module.scss';
import StarIcon from '../../assets/images/Star 1.svg';
import EllipsisIcon from '../../assets/images/ellipsis.svg';
import FullHeartIcon from '../../assets/images/heart_full_icon.svg';
import EmptyHeartIcon from '../../assets/images/heart_empty_icon.svg';
import classNames from 'classnames';
import { useState } from 'react';
interface Props {
  artwork: boardsArtworkType;
}

function BoardArtCard({ artwork }: Props) {
  const [isLiked, setIsLiked] = useState(artwork.isLiked);
  return (
    <div className={s.artwork_wrapper}>
      <img src={artwork.artImageUrl} alt="artwork" className={s.artwork_img} />
      <div className={s.artwork_options_wrapper}>
        <div
          className={classNames(s.artwork_option_wrapper, {
            [s.align_right]: artwork.isFavourited === false,
          })}
        >
          {artwork.isFavourited && <img src={StarIcon} alt="favourite" />}
          <img src={EllipsisIcon} alt="more" className={s.artwork_ellipsis} />
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
            <p className={s.artwork_owner_username}>{artwork.ownerUserName}</p>
          </div>
          <img
            src={isLiked ? FullHeartIcon : EmptyHeartIcon}
            alt="like"
            className={s.artwork_like}
            onClick={() => setIsLiked(!isLiked)}
          />
        </div>
      </div>
    </div>
  );
}

export default BoardArtCard;
