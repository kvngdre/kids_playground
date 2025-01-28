import { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import s from './BoardsSection.module.scss';
import classNames from 'classnames';
import deleteIcon from '../../../assets/images/trash-can.svg';
import addIcon from '../../../assets/images/Add-icon.svg';
import sampleBoardsData from './myBoardArtsSample.json';
import { boardsArtworkType } from '../../../types/sampleTypes';
import BoardArtCard from '../../Cards/BoardArtCard';
import FindInspirationBoards from './FindInspirationBoards';
import Modal from '../../../ui/Modal/Modal';
import CreateNewBoardModal from '../../../ui/Modal/CreateNewBoardModal';

type sampleBoardType = {
  name: string;
  artIDs: string[];
};

function BoardsSection() {
  const [boardsView, setBoardsView] = useState('Favorites');
  const [sampleBoards, setSampleBoards] = useState<sampleBoardType[]>([]);
  const [renderBoardData, setRenderBoardData] = useState<boardsArtworkType[]>(
    sampleBoardsData.filter((f) => f.isFavourited === true),
  );
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };
  const positionBlueIndicator = (index: number, length: number) => {
    const blueIndicator = document.getElementById('boards_view_indicator');
    let position = 0;
    if (length < 3) {
      position = 100 / (length - index);
    } else {
      position = (100 / length) * (index + 1);
    }
    if (blueIndicator !== null) {
      blueIndicator.style.left = `${position}%`;
      blueIndicator.style.transform = `translateX(-${position}%)`;
    }
  };
  useEffect(() => {
    if (boardsView === 'Favorites') {
      const blueIndicator = document.getElementById('boards_view_indicator');
      setRenderBoardData(
        sampleBoardsData.filter((f) => f.isFavourited === true),
      );
      if (blueIndicator !== null) {
        blueIndicator.style.left = `${0}%`;
        blueIndicator.style.transform = `translateX(-${0}%)`;
      }
    } else {
      const length = sampleBoards.length;
      const index = sampleBoards.findIndex((b) => b.name === boardsView);
      setRenderBoardData(
        sampleBoardsData.filter((f) =>
          sampleBoards
            .find((b) => b.name === boardsView)
            ?.artIDs.includes(f._id),
        ),
      );
      positionBlueIndicator(index, length);
    }
  }, [boardsView]);
  return (
    <div className={s.boards_container}>
      <div className={s.boards_nav_card}>
        <div className={s.boards_nav_container}>
          <div className={s.boards_nav_wrapper}>
            <div
              className={classNames(s.boards_nav_item, {
                [s.boards_nav_item_active]: boardsView === 'Favorites',
              })}
              onClick={() => setBoardsView('Favorites')}
            >
              <p className={s.boards_nav_item_total}>
                {sampleBoardsData.filter((f) => f.isFavourited === true).length}
              </p>
              <p className={s.boards_nav_item_title}>Favorites</p>
            </div>
            {sampleBoards.map((board, index) => (
              <div
                key={`${board.name}_${index}`}
                className={classNames(s.boards_nav_item, {
                  [s.boards_nav_item_active]: boardsView === board.name,
                })}
                onClick={() => setBoardsView(board.name)}
              >
                <p className={s.boards_nav_item_total}>{board.artIDs.length}</p>
                <p className={s.boards_nav_item_title}>{board.name}</p>
              </div>
            ))}
          </div>
          {false && (
            <div className={s.boards_nav_indicator_wrapper}>
              <span className={s.boards_nav_indicator_grey}>
                <span
                  className={s.boards_nav_indicator_blue}
                  id="boards_view_indicator"
                ></span>
              </span>
            </div>
          )}
        </div>
        <img
          src={deleteIcon}
          alt="delete board button"
          className={classNames(s.boards_button, {
            [s.boards_button_disabled]: boardsView === 'Favorites',
          })}
        />
        <Modal>
          <Modal.Open opensWindowName="createBoard">
            <img
              src={addIcon}
              alt="add board button"
              className={s.boards_button}
            />
          </Modal.Open>
          <Modal.Window name="createBoard">
            <CreateNewBoardModal
              createNewBoard={(boardName: string) => {
                console.log(boardName);
                const newBoard: sampleBoardType = {
                  name: boardName,
                  artIDs: ['p0q2r4s6t8u9v1', 'r9s1t3u5v7w8x0'],
                };
                setSampleBoards([...sampleBoards, newBoard]);
              }}
            />
          </Modal.Window>
        </Modal>
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={s.boards_artworks_wrapper}
        columnClassName={s.boards_artworks_col}
      >
        {renderBoardData.map((art) => (
          <BoardArtCard key={art._id} artwork={art} />
        ))}
      </Masonry>
      <FindInspirationBoards />
    </div>
  );
}

export default BoardsSection;
