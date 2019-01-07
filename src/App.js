import React, {Component} from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import {
  createGlobalStyle,
  ThemeProvider
} from "styled-components";
import HttpsRedirect from 'react-https-redirect';
import LanguageProvider
  from './Context/LanguageProvider'
import HomeScreen from "./screens/HomeScreen";
import './App.css';

const theme = {};

class App extends Component {
  render() {
    return (
      <HttpsRedirect>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <LanguageProvider>
              <BrowserRouter>
                <Switch>
                  <Route exact path='/'
                         component={HomeScreen}/>
                </Switch>
              </BrowserRouter>
            </LanguageProvider>
            <GlobalStyle/>
          </React.Fragment>
        </ThemeProvider>
      </HttpsRedirect>
    );
  }
}

const GlobalStyle = createGlobalStyle`
*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
 font-family: 'Futura PT', sans-serif;
 overflow-x: hidden;
 height: 100vh;
 position: relative;
}
html{
 overflow-x: hidden;
}
`

export default App;
