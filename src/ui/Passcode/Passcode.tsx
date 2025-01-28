import {
  BaseSyntheticEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import s from './Passcode.module.scss';
import useAppStore from '../../store/AppStore';

const Passcode = () => {
  const arrayValue = useAppStore((state) => state.passcodeValue);
  const setArrayValue = useAppStore((state) => state.setPasscodeValue);
  const [currentFocusedIndex, setCurrentFocusedIndex] = useState(0);
  const inputRefs = useRef<Array<HTMLInputElement> | []>([]);

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const keyCode = parseInt(e.key);
    if (
      !(keyCode >= 0 && keyCode <= 9) &&
      e.key !== 'Backspace' &&
      !(e.metaKey && e.key === 'v')
    ) {
      e.preventDefault();
    }
  };

  const onChange = (e: BaseSyntheticEvent, index: number) => {
    const newValue = [...arrayValue]; // Create a copy of the current arrayValue
    if (parseInt(e.target.value)) {
      newValue[index] = parseInt(e.target.value);
    } else {
      newValue[index] = e.target.value;
    }
    setArrayValue(newValue);
  };

  const onKeyUp = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace') {
      if (index === 0) {
        setCurrentFocusedIndex(0);
      } else {
        setCurrentFocusedIndex(index - 1);
        if (inputRefs && inputRefs.current && index === currentFocusedIndex) {
          inputRefs.current[index - 1].focus();
        }
      }
    } else if (e.key === '0') {
      setCurrentFocusedIndex(index + 1);
      if (
        inputRefs &&
        inputRefs.current &&
        index === currentFocusedIndex &&
        index < arrayValue.length - 1
      ) {
        inputRefs.current[index + 1].focus();
      }
    } else if (parseInt(e.key) && index < arrayValue.length - 1) {
      setCurrentFocusedIndex(index + 1);
      if (inputRefs && inputRefs.current && index === currentFocusedIndex) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const onFocus = (e: BaseSyntheticEvent, index: number) => {
    setCurrentFocusedIndex(index);
    // e.target.focus();
  };

  useEffect(() => {
    document.addEventListener('paste', async () => {
      // Handle all sub-usecases here

      const pastePermission = await navigator.permissions.query({
        name: 'clipboard-read' as PermissionName,
      });

      if (pastePermission.state === 'denied') {
        throw new Error('Not allowed to read clipboard');
      }

      const clipboardContent = await navigator.clipboard.readText();
      try {
        let newArray: Array<number | string> = clipboardContent.split('');
        newArray = newArray.map((num) => Number(num));

        const lastIndex = arrayValue.length - 1;
        if (currentFocusedIndex > 0) {
          const remainingPlaces = lastIndex - currentFocusedIndex;
          const partialArray = newArray.slice(0, remainingPlaces + 1);
          setArrayValue([
            ...arrayValue.slice(0, currentFocusedIndex),
            ...partialArray,
          ]);
        } else {
          setArrayValue([
            ...newArray,
            ...arrayValue.slice(newArray.length - 1, lastIndex),
          ]);
        }

        if (newArray.length < arrayValue.length && currentFocusedIndex === 0) {
          setCurrentFocusedIndex(newArray.length - 1);
          inputRefs.current[newArray.length - 1].focus();
        } else {
          setCurrentFocusedIndex(arrayValue.length - 1);
          inputRefs.current[arrayValue.length - 1].focus();
        }
      } catch (err) {
        console.error(err);
      }
    });

    return () => {
      document.removeEventListener('paste', () =>
        console.log('Removed paste listener'),
      );
    };
  }, [arrayValue, currentFocusedIndex]);

  return (
    <div className={s.passcode}>
      {/* <div> currentFocusedIndex: {currentFocusedIndex}</div>
      <div>{arrayValue}</div> */}
      <p className={s.passcode__heading}>Enter Passcode</p>
      <div className={s.passcode__box}>
        {arrayValue.map((value: string | number, index: number) => (
          <input
            className={s.passcode__box__input}
            key={`index-${index}`}
            ref={(el) => el && (inputRefs.current[index] = el)}
            inputMode="numeric"
            maxLength={1}
            type="text"
            value={String(value)}
            onChange={(e) => onChange(e, index)}
            onKeyUp={(e) => onKeyUp(e, index)}
            onKeyDown={(e) => onKeyDown(e)}
            onFocus={(e) => onFocus(e, index)}
          />
        ))}
      </div>
      <p className={s.passcode__forgotText}>Forgot Passcode</p>
    </div>
  );
};

export default Passcode;
