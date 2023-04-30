import SkinChooser from '../SkinChooser/SkinChooser';
import LangChooser from '../LangChooser/LangChooser';

import { HeaderWrapper, HeaderInner } from './Header.styled';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <SkinChooser
          skins={[
            { id: 'default', label: 'Default' },
            { id: 'minimal', label: 'Minimal' },
            { id: 'retro', label: 'Retro' },
          ]}
        />

        <LangChooser
          languages={[
            { id: 'en-US', label: 'EN' },
            { id: 'hu-HU', label: 'HU' },
          ]}
        />
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
