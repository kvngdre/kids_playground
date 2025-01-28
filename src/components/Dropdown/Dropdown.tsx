import { useEffect, useRef, useState } from 'react';
import s from './Dropdown.module.scss';
import carretIcon from '../../assets/images/Arrow 4.svg';
import classNames from 'classnames';

interface Props {
  options: string[];
  selectedOption: string;
  setSelectedOption: (option: string) => void;
}

function Dropdown({ options, selectedOption, setSelectedOption }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div style={{ position: 'relative' }} ref={dropdownRef}>
      <div
        className={s.dropdown_input_wrapper}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className={s.dropdown_text}>
          {selectedOption !== '' ? selectedOption : 'Select'}
        </p>
        <img
          src={carretIcon}
          alt="dropdown icon"
          className={classNames(s.dropdown_icon, {
            [s.dropdown_icon_open]: isOpen,
          })}
        />
      </div>
      {isOpen && (
        <div className={s.dropdown_wrapper}>
          <div className={s.dropdown__wrapper}>
            {options.length > 0 &&
              options.map((option) => (
                <div
                  key={option}
                  className={classNames(s.dropdown_option, {
                    [s.dropdown_option_active]:
                      option.toLocaleLowerCase() ===
                      selectedOption.toLocaleLowerCase(),
                  })}
                  onClick={() => handleSelect(option)}
                >
                  <p className={s.dropdown_option_text}>{option}</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
