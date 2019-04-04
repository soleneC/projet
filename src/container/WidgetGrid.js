import React, { Component } from 'react';
import Widget1 from '../component/Widget1';
import Widget2 from '../component/Widget2';
import Widget3 from '../component/Widget3';
import Widget4 from '../component/Widget4';
import Widget5 from '../component/Widget5';
import Widget6 from '../component/Widget6';

import { Container, Row, Col } from 'reactstrap';
import './WidgetGrid.css';


export default class WidgetGrid extends Component {
  render() {
    return (
    	<Row className="widget_grid">
      	<Col xs="12" sm="6">
        	<div className="w">
        	 <Widget1/>
        	</div>
      	</Col>

      	<Col xs="12" sm="6">
        	<div className="w">
        	 <Widget2/>
        	</div>
      	</Col>

        <Col xs="12">
        	<div className="w">
        	 <Widget3/>
          </div>
      	</Col>

      	<Col xs="12" sm="4">
        	<div className="w">
        	 <Widget4/>
          </div>
      	</Col>

      	<Col xs="12" sm="4">
        	<div className="w">
        	 <Widget5/>
          </div>
      	</Col>

      	<Col xs="12" sm="4">
      	 <div className="w">
      	   <Widget6/>
          </div>
      	</Col>

      </Row>
    );
  }
}
