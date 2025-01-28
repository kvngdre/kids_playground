import s from './CoinBox.module.scss';
import plusIcon from '../../assets/images/plus.svg';
import coinIcon from '../../assets/images/coin.svg';
import doubleArrow from '../../assets/images/fast-forward-double-right-arrows-symbol.svg';
import useAppStore from '../../store/AppStore';
import classNames from 'classnames';

const CoinBox = () => {
  const isCollapsed = useAppStore((state) => state.sidebarCollapsed);
  const toggleCollapsed = () =>
    useAppStore.setState({
      sidebarCollapsed: !isCollapsed,
    });
  return (
    <div className={classNames(s.box, { [s.isCollapsed]: isCollapsed })}>
      <button
        className={classNames(s.box__button, { [s.isCollapsed]: isCollapsed })}
      >
        <img
          className={classNames(s.box__button__addIcon, {
            [s.isCollapsed]: isCollapsed,
          })}
          src={plusIcon}
          alt="plus icon"
        />
        <img
          className={classNames(s.box__button__coinIcon, {
            [s.isCollapsed]: isCollapsed,
          })}
          src={coinIcon}
          alt="coin icon"
        />
        <p className="h6">23</p>
      </button>
      <img
        className={`${s.box__forwardArrows} ${isCollapsed ? s.box__forwardArrows__collapsed : ''}`}
        src={doubleArrow}
        alt="forward icon"
        onClick={toggleCollapsed}
      />
    </div>
  );
};

export default CoinBox;
