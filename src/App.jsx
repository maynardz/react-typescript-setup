import React from 'react';
import './App.css';
import Clock from './components/Clock';
// import Auth from './components/Auth/Auth';
import Navbar from './components/Navbar/Navbar';
import {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from './components/Styles/theme';
import {GlobalStyles} from './components/Styles/global';

// let testProp: string = 'Am I getting passed to the Clock component?'
// let optionalProp: string = 'You sure are!';

export default class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      theme:'light'
    }

  }

  toggleTheme() {
    if(this.state.theme === 'light'){
      this.setState({
        theme: 'dark'
      })
    } else {
      this.setState({
        theme: 'light'
      })
    }
  };

  render(){

    return (
      <>
        <ThemeProvider theme={this.state.theme === 'light' ? lightTheme : darkTheme}>
          <>
            <GlobalStyles />
              <Navbar toggleTheme={this.toggleTheme.bind(this)} theme={this.state.theme} />
              <Clock />
              {/* <Auth /> */}
            {/* </GlobalStyles> */}
          </>
        </ThemeProvider>
      </>
    );
  }
}