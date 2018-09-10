import React from 'react';
import { AppBar, Toolbar, Typography} from '@material-ui/core';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


export default props =>
<MuiThemeProvider>
    <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" >
            Google Places Application
          </Typography>
        </Toolbar>
      </AppBar>
  </MuiThemeProvider>