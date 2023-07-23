// Nav.js
import React from 'react';
import { List, ListItemButton, } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';

const flexContainer = {
  display: 'flex',
  flexDirection: 'row',
  padding: 8,
  spacing: 2,
};

const buttonStyle = {
  borderRadius: "10px",
  spacing: 2,
  marginRight: 8,
}

export function Nav() {
  return (
    <List style={flexContainer}>
      <ListItemButton style={buttonStyle} disableRipple>
        <ScrollLink
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-70}
          duration={300}
        >
          <h3>intro</h3>
        </ScrollLink>
      </ListItemButton>

      <ListItemButton style={buttonStyle} disableRipple>
        <ScrollLink
          activeClass="active"
          to="scholarships"
          spy={true}
          smooth={true}
          offset={-70}
          duration={300}
        >
          <h3>scholarships</h3>
        </ScrollLink>
      </ListItemButton>

    </List>
  );
};
