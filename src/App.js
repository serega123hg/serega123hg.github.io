import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';
import Header from './components/Header.js'
import Menu from './components/Menu.js'
import Main from './components/Main.js'

const url = process.env.PUBLIC_URL + "/img/bg.jpg";

const HeaderWrapper = styled.header`
  width: 100%;
  height: 49px;
  opacity:0.8;
  background-color: #242424;
`
const MenuWrapper = styled.div`
     height: 89px;
     padding-top: 20px;
`

const MainWrapper = styled.div`
   height: 600px;
   padding-top: 138px;
   background: url(${url}) no-repeat;
   background-size: cover;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderWrapper>  
          <Grid>
            <Header  />
          </Grid>
        </HeaderWrapper>  
        <MenuWrapper>
          <Grid>

          <Menu />
        </Grid>  
       </MenuWrapper>
        <MainWrapper>
           <Grid>
          <Main />
          </Grid>
        </MainWrapper>
      </div>
    );
  }
}

export default App;
