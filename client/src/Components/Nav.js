import React, { Component } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
  Avatar
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';

import Colors from '../Assets/Colors';
export default class extends Component {
  scrollToPage(e) {
    const element = document.getElementById(e);
    element.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    return (
      <div>
        <AppBar position="static" color="inherit">
          <Toolbar>
            <div
              style={{
                display: 'flex',
                flex: 1
              }}
            >
              <Button
                onClick={this.scrollToPage.bind(this, 'home')}
                color="inherit"
              >
                {/* <Typography variant="title" color="inherit">
                  Home
                </Typography> */}
                <Avatar style={{ backgroundColor: Colors.orange }}>JC</Avatar>
              </Button>
              <Button
                onClick={this.scrollToPage.bind(this, 'about')}
                color="inherit"
              >
                <Typography variant="title" color="inherit">
                  About
                </Typography>
              </Button>
              <Button
                onClick={this.scrollToPage.bind(this, 'portfolio')}
                color="inherit"
              >
                <Typography variant="title" color="inherit">
                  Portfolio
                </Typography>
              </Button>
              <Button
                onClick={this.scrollToPage.bind(this, 'contact')}
                color="inherit"
              >
                <Typography variant="title" color="inherit">
                  Contact
                </Typography>
              </Button>
            </div>
            <IconButton color="inherit" aria-label="Menu">
              <Menu />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
