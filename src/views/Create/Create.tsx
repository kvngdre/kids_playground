import { useState } from 'react';
import s from './Create.module.scss';
import promptIcon from '../../assets/images/text 1.svg';
import sketchIcon from '../../assets/images/pencil (2) 2.svg';
import photoIcon from '../../assets/images/gallery 1.svg';
import CreateOptionCard from '../../components/Cards/CreateOptionCard';

type viewOptions = 'menu' | 'prompt' | 'sketch' | 'photo';

const Create = () => {
  const [view, setView] = useState<viewOptions>('menu');
  return (
    <div className={s.create_container}>
      <div className={s.flex_container_center}>
        {view === 'menu' && (
          <div className={s.menu_wrapper}>
            <p className="h1_gradient_primary">Create</p>
            <div className={s.menu_options_wrapper}>
              <CreateOptionCard
                title="Prompt > AI"
                description="Prompt to AI Image generator"
                onClick={() => console.log('prompt')}
                imageSrc={promptIcon}
              />
              <CreateOptionCard
                title="Sketch > AI"
                description="Draw on the art board to style with AI"
                onClick={() => console.log('sketch')}
                imageSrc={sketchIcon}
              />
              <CreateOptionCard
                title="Photo > AI"
                description="Select or Upload a photo to style with AI"
                onClick={() => console.log('photo')}
                imageSrc={photoIcon}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Create;
