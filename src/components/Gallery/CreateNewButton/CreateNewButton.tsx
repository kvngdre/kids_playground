import s from './CreateNewButton.module.scss';
import plusIcon from '../../../assets/images/plus_linear.svg';

interface Props {
  title: string;
  onClick: () => void;
}

function CreateNewButton({ title, onClick }: Props) {
  return (
    <div className={s.button_wrapper} onClick={onClick}>
      <div className={s.button_bg}>
        <img
          src={plusIcon}
          alt="Create Art Gallery"
          className={s.button_icon}
        />
        <p className="h4 text-center no-mouse-action">{title}</p>
      </div>
    </div>
  );
}

export default CreateNewButton;
