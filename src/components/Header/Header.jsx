import { Box } from 'components/Box/Box';
// import { TbRipple } from 'react-icons/tb';
// import { SiPlex } from 'react-icons/si';
import { GiBooze } from 'react-icons/gi';

import { Container } from 'constants/GlobalStyle';
import { HomeLink, MenuButton } from './Header.styled';

const Header = () => {
  return (
    <header>
      <Container>
        <Box
          as="nav"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <HomeLink href="/">Alcohome</HomeLink>
          <MenuButton>
            <GiBooze size={25} />
          </MenuButton>
        </Box>
      </Container>
    </header>
  );
};

export default Header;
