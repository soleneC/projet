import React, { Component } from 'react';
import Header from './container/Header';
import WidgetGrid from './container/WidgetGrid';
import { Container, Row, Col } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div class="fond">
        <Container fluid >
        <div class="saut">
        <Row>
       
        <Col >
        <WidgetGrid/>
        </Col>

        </Row></div>
        </Container>
        </div>
      </div>
      
    );
  }
}

export default App;
