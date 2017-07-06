import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { IndexLink, Link, navigateTo, browserHistory } from 'react-router'
import ReactDOM from 'react-dom';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import renderIf from 'render-if';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';
import spacing from 'material-ui/styles/spacing';
import {darkWhite, lightWhite, grey900} from 'material-ui/styles/colors';


// css from https://github.com/susielu/minimal-ui

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});


var App = inject("store")(observer(React.createClass({
  getInitialState() {
    return {
      open: false,
      muiTheme: getMuiTheme()
    };
  },
  handleToggle(){
  console.log("OK")
    this.setState({open: !this.state.open})
    },
      getStyles() {
    const styles = {
      appBar: {
        position: 'fixed',
        // Needed to overlap the examples
        zIndex: this.state.muiTheme.zIndex.appBar + 1,
        top: 0,
      },
      root: {
        paddingTop: spacing.desktopKeylineIncrement,
        minHeight: 400,
      },
      content: {
        margin: spacing.desktopGutter,
      },
      contentWhenMedium: {
        margin: `${spacing.desktopGutter * 2}px ${spacing.desktopGutter * 3}px`,
      },
      footer: {
        backgroundColor: grey900,
        textAlign: 'center',
      },
      a: {
        color: darkWhite,
      },
      p: {
        margin: '0 auto',
        padding: 0,
        color: lightWhite,
        maxWidth: 356,
      },
      browserstack: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        margin: '25px 15px 0',
        padding: 0,
        color: lightWhite,
        lineHeight: '25px',
        fontSize: 12,
      },
      browserstackLogo: {
        margin: '0 3px',
      },
      iconButton: {
        color: darkWhite,
      },
    };

    if (this.props.width === MEDIUM || this.props.width === LARGE) {
      styles.content = Object.assign(styles.content, styles.contentWhenMedium);
    }

    return styles;
  },
	
    render() {
    
    const styles = this.getStyles();
        
        return (
                <MuiThemeProvider muiTheme={muiTheme} >
                <div>
                <AppBar
                  title="Commander"
                  onClick={this.handleToggle}
                  zDepth={0}
                  style={styles.appBar}
                />
                <div style={styles.root}>
                  <div style={styles.content}>
                    {this.props.children}
                  </div>
                </div>
                <Drawer open={this.state.open}>
                  <MenuItem primaryText="Home" linkButton={true} containerElement={<Link to="/" />} />
                  {renderIf(this.props.store.user.loggedin)(
                  <MenuItem primaryText="Sign out" linkButton={true} containerElement={<Link to="/logout" />} />
                  )}
                  {renderIf(this.props.store.user.loggedin)(
                  <MenuItem primaryText={this.props.store.user.email} />
                  )}
                </Drawer>
                
                
                
                <footer className="bg-dark">
                <div className="container txt-center">
                <div className="column12">
                <p> </p>
                </div>
                </div>
                </footer>
                </div>
                </MuiThemeProvider>
                );
    }
})))

export default App
