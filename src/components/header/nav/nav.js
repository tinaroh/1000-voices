import React from 'react';
import { Link } from 'gatsby';
import { Container, ListItem, MenuButton } from './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class Nav extends React.Component {
  state = {
    isOpen: false,
  };

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Container>
        <MenuButton
          className={this.state.isOpen ? 'opened' : undefined}
          onClick={this.toggleMenu}
        >
          <FontAwesomeIcon icon={faBars} color="white" size="lg" />
        </MenuButton>
        <ul className={this.state.isOpen ? 'opened' : undefined}>
          <ListItem>
            <a href="https://yang2020.com">YANG2020</a>
          </ListItem>
          <ListItem>
            <Link to="/submit">Submit</Link>
          </ListItem>
          <ListItem>
            <a href="https://secure.actblue.com/donate/friends-of-andrew-yang">
              DONATE
            </a>
          </ListItem>
        </ul>
      </Container>
    );
  }
}

export default Nav;
