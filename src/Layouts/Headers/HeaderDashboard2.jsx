import React from 'react';
import clsx from 'clsx';
import { Layout } from 'antd';

// Assets
import LogoWord from '../../Assets/SVG/logoWord.svg';

// Header Items
import DarkModeToggler from './Items/DarkModeToggler';
import DropdownInternationalization from './Items/DropdownInternationalization';
import DropdownNotification from './Items/DropdownNotification';
import DropdownAccount from './Items/DropdownAccount';

const { Header } = Layout;

const HeaderDashboard2 = () => {
  const style = {
    wrapper: clsx(
      'p-3',
      'w-full sticky top-0 z-50',
      'flex justify-between items-center',
      'text-white'
    ),
  };

  return (
    <Header className={style.wrapper}>
      <img src={LogoWord} alt="LogoWord" className="h-full" />
      <div className="flex items-center gap-2">
        <DarkModeToggler ghost />
        <DropdownInternationalization ghost />
        <DropdownNotification ghost />
        <DropdownAccount />
      </div>
    </Header>
  );
};

export default HeaderDashboard2;
