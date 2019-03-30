import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';
import axios from 'axios';

//source
//http://recharts.org/en-US/examples/SimpleRadarChart


export default class Widget2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: [],
    }
  }

  componentDidMount() {
    this.sync();
  }


  render() {
    const { albums } = this.state;


     return (

        <div className="taille">
          <div className="titre">Total des genres de musique écoutés</div>
          <RadarChart cx={190} cy={125} outerRadius={75} width={500} height={250} data={albums}>
             <PolarGrid />
             <PolarAngleAxis dataKey="_id" stroke="#3F9EF9" />
             <PolarRadiusAxis />
             <Radar name="Genre" dataKey="count" stroke="#3F9EF9" fill="#3F73CB" fillOpacity={0.6} />
          </RadarChart>
  </div>

  );
  }
      sync() {
         axios.get("http://localhost:8000/albums/AlbumGenre")
          .then((rep) => this.setState({ albums: rep.data }));    
        }
}