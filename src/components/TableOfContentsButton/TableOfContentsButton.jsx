import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import DehazeIcon from '@mui/icons-material/Dehaze';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import './TableOfContentsButton.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff', // White
    },
    secondary: {
      main: '#424242', // Grey
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none', // Remove the box-shadow
          '&:hover': {
            boxShadow: 'none', // Remove the box-shadow on hover
          },
          '&:focus': {
            boxShadow: 'none', // Remove the box-shadow on focus
          },
        },
      },
    },
  },
});

const TableOfContentsButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // You can adjust the offset (e.g., 100) based on your needs
      setIsVisible(window.pageYOffset < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    setIsClicked((prevIsClicked) => !prevIsClicked);
  };

  const handleSectionClick = (sectionId) => () => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return !isVisible ? (
    <div className="button-container">
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          color="primary"
          disableRipple
          onClick={handleButtonClick}
        >
          <DehazeIcon />
        </Button>
      </ThemeProvider>
      {isClicked && (
        <div className="toc-list">
          <List component="nav" aria-label="table of contents">
            <ListItemButton onClick={handleSectionClick('intro')}>
              top
            </ListItemButton>
            <ListItemButton onClick={handleSectionClick('scholarships')}>
              scholarships
            </ListItemButton>
          </List>
        </div>
      )}
    </div>
  ) : null;
};

export default TableOfContentsButton;
