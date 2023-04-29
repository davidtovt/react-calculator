import SkinChooser from '../SkinChooser/SkinChooser';
import LangChooser from '../LangChooser/LangChooser';

import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <SkinChooser
        skins={[
          { id: 'skin-default', label: 'Default' },
          { id: 'skin-minimal', label: 'Minimal' },
          { id: 'skin-retro', label: 'Retro' },
        ]}
      />

      <LangChooser
        languages={[
          { id: 'en-US', label: 'EN' },
          { id: 'hu-HU', label: 'HU' },
        ]}
      />
    </div>
  );
};

export default Header;
