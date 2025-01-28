import searchIcon from '../../assets/images/magnifying-glass 4.svg';
import s from './Search.module.scss'

interface Props{
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

function Search({onChange, value}: Props) {
  return (
    <div className={s.search_wrapper}>
      <input
        type="text"
        id="art-search-box"
        value={value}
        onChange={onChange}
        placeholder="Search"
        className={s.search_input}
      />
      <label htmlFor="art-search-box">
        <img
          src={searchIcon}
          alt="search art works"
          className={s.search_icon}
        />
      </label>
    </div>
  );
}

export default Search;
