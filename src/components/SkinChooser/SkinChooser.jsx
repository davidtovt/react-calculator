import { useContext } from 'react';

import { SkinContext } from '../../contexts/skin';

import { ListLinkStyle } from '../../styles/Components.styled';

const SkinChooser = ({ skins }) => {
  const { currentSkin, setCurrentSkin } = useContext(SkinContext);

  const handleSkinChange = (id) => {
    setCurrentSkin(id);
  };

  return (
    <ListLinkStyle>
      {skins &&
        skins.map(({ id, label }) => (
          <li key={id}>
            <button
              disabled={currentSkin === id}
              onClick={() => handleSkinChange(id)}
            >
              {label}
            </button>
          </li>
        ))}
    </ListLinkStyle>
  );
};

export default SkinChooser;
