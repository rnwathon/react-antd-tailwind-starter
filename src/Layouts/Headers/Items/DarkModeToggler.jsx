import React from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { useTheme } from '../../../Styles/antd/use-theme.hook';
import HeaderItemIcon from './HeaderItemIcon';

const DarkModeToggler = ({ ...props }) => {
  const [darkMode, toggleDarkMode] = useTheme();

  return (
    <HeaderItemIcon onClick={toggleDarkMode} {...props}>
      {darkMode ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
    </HeaderItemIcon>
  );
};

export default DarkModeToggler;
