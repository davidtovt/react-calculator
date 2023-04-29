import { useState } from 'react';
import './SkinChooser.scss';

const SkinChooser = ({ skins }) => {
  const [currentSkin, setCurrentSkin] = useState(skins[0].id);
  const bodyClasses = document.body.classList;

  const handleSkinChange = (id) => {
    setCurrentSkin(id);
  };

  // Creatte skin ID array from skin list
  const skinIds = skins.reduce((acc, skin) => {
    return [...acc, skin.id];
  }, []);

  // Remove skin ID-s from body and add the current ID
  bodyClasses.remove(...skinIds);
  bodyClasses.add(currentSkin);

  return (
    <ul className="list-link">
      {skins &&
        skins.map((skin) => (
          <li key={skin.id}>
            <button
              disabled={currentSkin === skin.id}
              onClick={() => handleSkinChange(skin.id)}
            >
              {skin.label}
            </button>
          </li>
        ))}
    </ul>
  );
};

export default SkinChooser;
