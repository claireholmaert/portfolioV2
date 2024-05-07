// DarkModeContext.js
import { createContext, useState } from 'react';

// props
import PropTypes from 'prop-types';

const DarkMode = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  DarkModeProvider.propTypes = {
    children: PropTypes.node.isRequired,
  }

  return (
    <DarkMode.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkMode.Provider>
  );
};

export default DarkMode;

