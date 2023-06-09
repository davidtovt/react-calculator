import { createContext, useState } from 'react';

export const SkinContext = createContext('');

const SkinProvider = ({ children }) => {
  const [currentSkin, setCurrentSkin] = useState('default');

  return (
    <SkinContext.Provider value={{ currentSkin, setCurrentSkin }}>
      {children}
    </SkinContext.Provider>
  );
};

export default SkinProvider;
