import { useState } from 'react';
import s from './Gallery.module.scss';
import CreateNewButton from '../../components/Gallery/CreateNewButton/CreateNewButton';
import gearIcon from '../../assets/images/settings_1.svg';
import placeholderImg from '../../assets/images/placeholder_image.png';
import artIcon from '../../assets/images/Art.svg';
import artActiveIcon from '../../assets/images/Art Work.svg';
import followingIcon from '../../assets/images/smile 1.svg';
import followingActiveIcon from '../../assets/images/smile 2.svg';
import boardsIcon from '../../assets/images/collage 1.svg';
import boardsActiveIcon from '../../assets/images/collage 2.svg';
import myGalleryIcon from '../../assets/images/gallery 3.svg';
import myArtworkIcon from '../../assets/images/brush 2.svg';
import sampleGalleryData from './myGallerySample.json';
import sampleArtworksData from './myArtworksSample.json';
import MyGalleryCard from '../../components/Gallery/MyGalleryCard/MyGalleryCard';
import MyArtworkCard from '../../components/Gallery/MyArtworkCard/MyArtworkCard';
import Modal from '../../ui/Modal/Modal';
import FollowingSection from '../../components/Gallery/Following/FollowingSection';
import Search from '../../components/Search/Search';
import BoardsSection from '../../components/Gallery/Boards/BoardsSection';

type GalleryViewOptions = 'art' | 'following' | 'boards';

const Gallery = () => {
  const [galleryView, setGalleryView] = useState<GalleryViewOptions>('art');

  const galleryViewToggles = [
    {
      title: 'Art Work',
      icon: galleryView === 'art' ? artActiveIcon : artIcon,
      option: 'art',
    },
    {
      title: 'Following',
      icon: galleryView === 'following' ? followingActiveIcon : followingIcon,
      option: 'following',
    },
    {
      title: 'Boards',
      icon: galleryView === 'boards' ? boardsActiveIcon : boardsIcon,
      option: 'boards',
    },
  ];

  const [search, setSearch] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredArtworks = sampleArtworksData.filter((artwork) =>
    artwork.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className={s.gallery_container}>
      <div className={s.flex_container_center}>
        <div className={s.profile_card}>
          <div className={s.settings_wrapper}>
            <img
              src={gearIcon}
              alt="profile settings"
              className={s.settings_icon}
            />
          </div>
          <div className={s.profile_info_wrapper}>
            <p className="h4 text-center">
              Aliyah <span style={{ fontWeight: 400 }}>{`(@${'alicat'})`}</span>
            </p>
            <div className={`${s.flex_container_center} full-width`}>
              <img
                src={placeholderImg}
                className={s.profile_image}
                alt="user profile image"
              />
            </div>
          </div>
          <div className={s.gallery_view_wrapper}>
            {galleryViewToggles.map((toggle) => (
              <div
                key={toggle.title}
                className={s.gallery_view_option}
                onClick={() =>
                  setGalleryView(toggle.option as GalleryViewOptions)
                }
              >
                <img
                  src={toggle.icon}
                  alt={toggle.title}
                  className={s.gallery_view_option_icon}
                />
                <p
                  className={`h4 ${galleryView === toggle.option ? 'color_primary_400' : ''}`}
                >
                  {toggle.title}
                </p>
              </div>
            ))}
            <div className={s.gallery_view_indicator_wrapper}>
              <span className={s.gallery_view_indicator_grey}>
                <span
                  className={`${s.gallery_view_indicator_blue} ${galleryView === 'art' ? s.start : galleryView === 'following' ? s.middle : s.end}`}
                ></span>
              </span>
            </div>
          </div>
        </div>
      </div>
      {galleryView === 'art' && (
        <div className={s.gallery_view_art}>
          <div className={s.section}>
            <div className={s.section_header}>
              <div className={s.section_title_wrapper}>
                <img
                  src={myGalleryIcon}
                  alt="My Galleries Icon"
                  className={s.section_title_img}
                />
                <p className="h2" style={{ fontWeight: 700 }}>
                  My Galleries
                </p>
              </div>
            </div>
            <div className={s.section_content}>
              {sampleGalleryData.length > 0 &&
                sampleGalleryData.map((gallery) => (
                  <MyGalleryCard
                    key={gallery.name}
                    title={gallery.name}
                    gallery={gallery.artworks}
                    onSettings={() => console.log(gallery)}
                  />
                ))}
              <Modal>
                <Modal.Open opensWindowName="createArtGallery">
                  <CreateNewButton
                    title="Create Art Gallery"
                    onClick={() => console.log('clicked')}
                  />
                </Modal.Open>
                <Modal.Window name="createArtGallery">
                  <div></div>
                </Modal.Window>
              </Modal>
            </div>
          </div>
          <div className={s.section}>
            <div className={s.section_header}>
              <div className={s.section_title_wrapper}>
                <img
                  src={myArtworkIcon}
                  alt="My Art Work Icon"
                  className={s.section_title_img}
                />
                <p className="h2" style={{ fontWeight: 700 }}>
                  My Art Work
                </p>
              </div>
              <div className={s.section_search_wrapper}>
                <Search value={search} onChange={handleChange} />
              </div>
            </div>
            <div className={s.section_content}>
              {filteredArtworks.length > 0 &&
                filteredArtworks.map((artwork) => (
                  <MyArtworkCard key={artwork.title} artwork={artwork} />
                ))}
              <Modal>
                <Modal.Open opensWindowName="createArt">
                  <CreateNewButton
                    title="Create Art"
                    onClick={() => console.log('clicked')}
                  />
                </Modal.Open>
                <Modal.Window name="createArt">
                  <div></div>
                </Modal.Window>
              </Modal>
            </div>
          </div>
        </div>
      )}
      {galleryView === 'following' && <FollowingSection />}
      {galleryView === 'boards' && <BoardsSection />}
    </div>
  );
};

export default Gallery;
