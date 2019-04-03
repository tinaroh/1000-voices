import React from 'react';
import { Link } from 'gatsby';
import { Container, ListItem, MenuButton } from './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default class Nav extends React.Component {
  state = {
    isOpen: false,
  };

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Container>
        <ul>
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
        <MenuButton onClick={this.toggleMenu}>
          <FontAwesomeIcon icon={faBars} color="white" size="lg" />
        </MenuButton>
      </Container>
    );
  }
}

// export default Nav;
// import React from 'react';
// import { Link } from 'gatsby';
// import { Container, ListItem } from './nav.css';

// const Nav = () => (
//   <Container>
//     <ul>
//       <ListItem>
//         <a href="https://yang2020.com">YANG2020</a>
//       </ListItem>
//       <ListItem>
//         <Link to="/submit">Submit</Link>
//       </ListItem>
//       <ListItem>
//         <a href="https://secure.actblue.com/donate/friends-of-andrew-yang">
//           DONATE
//         </a>
//       </ListItem>
//     </ul>
//   </Container>
// );

// export default Nav;
