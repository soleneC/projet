import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

//source
//http://recharts.org/en-US/examples/SimpleRadarChart

const data = [
  {
    subject: 'Rock', A: 120, B: 110, fullMark: 150,
  },
  {
    subject: 'Pop', A: 98, B: 130, fullMark: 150,
  },
  {
    subject: 'Jazz', A: 86, B: 130, fullMark: 150,
  },
  {
    subject: 'Classique', A: 99, B: 100, fullMark: 150,
  },
  {
    subject: 'Soul', A: 85, B: 90, fullMark: 150,
  },
  {
    subject: 'Techno', A: 65, B: 85, fullMark: 150,
  },
];

export default class Widget2 extends Component {


  render() {
    return (

      <div className="taille">
      <div className="titre">Widget numéro 2</div>
      <RadarChart cx={190} cy={125} outerRadius={75} width={500} height={250} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" stroke="#3F9EF9" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="A" stroke="#3F9EF9" fill="#3F73CB" fillOpacity={0.6} />
      </RadarChart>
      </div>

    );
  }
}
