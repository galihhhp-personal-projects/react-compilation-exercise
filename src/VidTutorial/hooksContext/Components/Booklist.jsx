import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

const Booklist = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div
      style={{ background: theme.ui, color: theme.syntax }}
      className="book-list d-flex flex-column align-items-center">
      <ul>
        <li style={{ background: theme.ui }}>the way the king</li>
        <li style={{ background: theme.ui }}>the name of the winds</li>
        <li style={{ background: theme.ui }}>the final empire</li>
      </ul>
    </div>
  );
};

export default Booklist;
