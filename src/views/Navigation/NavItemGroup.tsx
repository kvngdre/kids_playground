import { useNavigate } from 'react-router-dom';
import s from './NavItemGroup.module.scss';
import useAppStore from '../../store/AppStore';
import classNames from 'classnames';

interface NavItemGroupProps {
  imageSrc: string;
  text: string;
  toRoute: string;
}

const NavItemGroup = ({ imageSrc, text, toRoute }: NavItemGroupProps) => {
  const navigate = useNavigate();
  const setActiveSideNav = useAppStore((state) => state.setActiveSideNav);
  const activeSideNav = useAppStore((state) => state.activeSideNav);
  const isCollapsed = useAppStore((state) => state.sidebarCollapsed);
  const isActive = activeSideNav === toRoute;

  const handleNavClick = () => {
    setActiveSideNav(toRoute);
    navigate(toRoute);
  };

  return (
    <div
      className={classNames(
        s.box,
        { [s.active]: isActive },
        { [s.collapsed]: isCollapsed },
      )}
      onClick={handleNavClick}
    >
      <div className={s.box__inner}>
        <img
          className={`${isCollapsed ? s.box__inner__image__collapsed : s.box__inner__image}`}
          src={imageSrc}
        />
        {!isCollapsed && <p className="sidebar-text">{text}</p>}
      </div>
    </div>
  );
};

export default NavItemGroup;
