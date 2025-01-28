import { useContext, useState } from 'react';
import s from './CreateNewBoardModal.module.scss';
import { ModalContext } from './Modal';

interface Props {
  createNewBoard: (boardName: string) => void;
}
function CreateNewBoardModal({ createNewBoard }: Props) {
  const modalContext = useContext(ModalContext);
  const [boardName, setBoardName] = useState('');
  return (
    <div className={s.modal}>
      <p className="h3 color_primary_400">Create a Board</p>
      <div className={s.details_wrapper}>
        <p className="h5">Title</p>
        <input
          type="text"
          placeholder="Name of folder"
          className={s.details_input}
          value={boardName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setBoardName(e.target.value)
          }
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter' && boardName !== '') {
              createNewBoard(boardName);
              modalContext?.close();
            }
          }}
        />
      </div>
      <div className={s.save_wrapper}>
        <button
          disabled={boardName === ''}
          className={s.save_button}
          onClick={() => {
            createNewBoard(boardName);
            modalContext?.close();
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
}

export default CreateNewBoardModal;
