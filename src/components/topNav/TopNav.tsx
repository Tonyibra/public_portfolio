import React from 'react';
import Row from '../atoms/row/Row';
import {
  AppButtonContainer,
  Container,
  ItemRow,
  List,
  ListRow,
} from './TopNav.styles';
import Text from '../atoms/text/Text';
import { NAV_DATA } from '@/data/nav';
import { useMediaQuery } from 'react-responsive';
import { smallScreenWidth } from '@/utils';
import { Squash as Hamburger } from 'hamburger-react';
import AppButton from '../atoms/appButton/AppButton';
import { Link } from 'react-scroll';

const TopNav = () => {
  const isTabletOrMobile = useMediaQuery({
    query: `(max-width: ${smallScreenWidth}px)`,
  });
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navColor = React.useMemo(() => {
    return scrolled ? '#050a11' : 'transparent';
  }, [scrolled]);

  return (
    <Row justifyContent="space-between">
      <Container color={navColor}>
        <List>
          {!isTabletOrMobile ? (
            <>
              <Text type="h1">Tony ibrahim.</Text>
              <ListRow>
                <ItemRow>
                  {NAV_DATA.map(({ id, title }) => (
                    <Link spy smooth delay={250} to={title}>
                      <Text isLink key={id.toString()} type="li">
                        {title}
                      </Text>
                    </Link>
                  ))}
                </ItemRow>
                <AppButton>Start a Project?</AppButton>
              </ListRow>
            </>
          ) : (
            <Row
              justifyContent="space-between"
              style={{
                width: '100%',
              }}
            >
              <Text type="h1">Tony ibrahim.</Text>
              <AppButtonContainer>
                <AppButton>Start a Project?</AppButton>
              </AppButtonContainer>
            </Row>
          )}
        </List>
      </Container>
    </Row>
  );
};

export default TopNav;
