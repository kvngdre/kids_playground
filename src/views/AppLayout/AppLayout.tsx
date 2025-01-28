import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import s from './AppLayout.module.scss';
import useAppStore from '../../store/AppStore';
import classNames from 'classnames';

const AppLayout = () => {
  const isCollapsed = useAppStore((state) => state.sidebarCollapsed);
  return (
    <div className={classNames(s.layout, { [s.isCollapsed]: isCollapsed })}>
      <Sidebar />

      <main className={s.layout__main}>
        {/* <div className={s.layout__main__container}> */}
        <Outlet />
        {/* </div> */}
      </main>
    </div>
  );
};

export default AppLayout;
