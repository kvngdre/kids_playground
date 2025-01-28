import classNames from 'classnames';
import useAppStore from '../../store/AppStore';
import MainNav from '../Navigation/MainNav';
import s from './Sidebar.module.scss';

const Sidebar = () => {
  const isCollapsed = useAppStore((state) => state.sidebarCollapsed);
  return (
    <aside className={classNames(s.sidebar, { [s.isCollapsed]: isCollapsed })}>
      <MainNav />
    </aside>
  );
};

export default Sidebar;
