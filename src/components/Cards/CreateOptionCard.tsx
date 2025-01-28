import s from './CreateOptionCard.module.scss';

interface Props {
  imageSrc: string;
  title: string;
  description: string;
  onClick: () => void;
}
function CreateOptionCard({ imageSrc, title, description, onClick }: Props) {
  return (
    <div className={s.card_wrapper} onClick={onClick}>
      <img src={imageSrc} alt={title} className={s.card_img} />
      <p className={s.card_title}>{title}</p>
      <p className={s.card_description}>{description}</p>
    </div>
  );
}

export default CreateOptionCard;
