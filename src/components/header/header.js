import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';
import { Container, d, MenuButton } from './header.css';
import Title from 'components/title';
// import Nav from 'components/header/nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

class Header extends React.Component {
  state = {
    isOpen: false,
  };

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      // <AnimatedContainer>
      <Container className={this.state.isOpen ? 'opened' : undefined}>
        <Link to="/">
          <Title as="h1" className="fullTitle">
            {this.props.title}
          </Title>
          <Title as="h1" className="shortTitle">
            {this.props.shortTitle}
          </Title>
        </Link>
        <a className="menu" href="https://yang2020.com">
          YANG2020
        </a>
        <Link className="menu" to="/submit">
          Submit
        </Link>
        <a
          className="menu"
          href="https://secure.actblue.com/donate/friends-of-andrew-yang"
        >
          Donate
        </a>
        <MenuButton onClick={this.toggleMenu}>
          <FontAwesomeIcon icon={faBars} color="white" size="lg" />
        </MenuButton>
        {/* <Nav title={title} shortTitle={shortTitle} /> */}
      </Container>
      // </AnimatedContainer>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  shortTitle: PropTypes.string.isRequired,
};

export default Header;
